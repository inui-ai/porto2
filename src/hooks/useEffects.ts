import { useEffect } from 'react'

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Soft light that follows the pointer across the page. */
export function useSpotlight() {
  useEffect(() => {
    if (reduced() || !window.matchMedia('(pointer: fine)').matches) return

    const glow = document.createElement('div')
    glow.className = 'spotlight'
    glow.setAttribute('aria-hidden', 'true')
    document.body.appendChild(glow)

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let frame = 0

    const onMove = (event: PointerEvent) => {
      tx = event.clientX
      ty = event.clientY
      glow.dataset.active = 'true'
    }

    const onLeave = () => {
      glow.dataset.active = 'false'
    }

    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      glow.style.transform = `translate3d(${x - 260}px, ${y - 260}px, 0)`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      glow.remove()
    }
  }, [])
}

/** Thin line at the top that fills as the page is read. */
export function useScrollProgress() {
  useEffect(() => {
    const bar = document.createElement('div')
    bar.className = 'progress'
    bar.setAttribute('aria-hidden', 'true')
    document.body.appendChild(bar)

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      bar.remove()
    }
  }, [])
}

/** Cards lean toward the pointer, like a sheet of glass catching the light. */
export function useTilt(selector: string, max = 5) {
  useEffect(() => {
    if (reduced() || !window.matchMedia('(pointer: fine)').matches) return

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector))
    const cleanups: Array<() => void> = []

    nodes.forEach((node) => {
      node.classList.add('tilt')

      const onMove = (event: PointerEvent) => {
        const rect = node.getBoundingClientRect()
        const px = (event.clientX - rect.left) / rect.width - 0.5
        const py = (event.clientY - rect.top) / rect.height - 0.5
        node.style.setProperty('--tilt-x', `${-py * max}deg`)
        node.style.setProperty('--tilt-y', `${px * max}deg`)
        node.style.setProperty('--tilt-mx', `${(px + 0.5) * 100}%`)
        node.style.setProperty('--tilt-my', `${(py + 0.5) * 100}%`)
      }

      const onLeave = () => {
        node.style.setProperty('--tilt-x', '0deg')
        node.style.setProperty('--tilt-y', '0deg')
      }

      node.addEventListener('pointermove', onMove)
      node.addEventListener('pointerleave', onLeave)
      cleanups.push(() => {
        node.removeEventListener('pointermove', onMove)
        node.removeEventListener('pointerleave', onLeave)
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [selector, max])
}

/** Counts a stat up from zero once, the first time it is seen. */
export function useCountUp() {
  useEffect(() => {
    if (reduced()) return

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'))
    if (!nodes.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = Number(el.dataset.count ?? 0)
          io.unobserve(el)

          const start = performance.now()
          const duration = 1100

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            el.textContent = String(Math.round(target * eased))
            if (progress < 1) requestAnimationFrame(step)
          }

          requestAnimationFrame(step)
        })
      },
      { threshold: 0.35 },
    )

    nodes.forEach((node) => io.observe(node))
    return () => io.disconnect()
  }, [])
}
