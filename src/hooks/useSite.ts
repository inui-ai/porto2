import { useLayoutEffect, useEffect, useRef, useState } from 'react'

export function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

const revealSelector = [
  '.section .shell > *',
  '.work-cell',
  '.exp-row',
  '.award-row',
  '.faq-item',
  '.news-card',
  '.gallery figure',
].join(',')

/**
 * Makes one line of display type fill its container: the text is measured once to learn
 * its width-per-em ratio, then CSS container units keep it spanning the column on every
 * viewport without any further measuring on resize.
 */
export function useFitText<T extends HTMLElement>(max: number) {
  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    // Measured near display size, because variable fonts change their widths with size.
    const base = 200
    // Must mirror the negative margin in CSS: it pulls the line out of the column.
    const shiftEm = 0.055

    const measure = () => {
      const box = el.parentElement
      if (!box) return

      el.style.fontSize = `${base}px`
      const range = document.createRange()
      range.selectNodeContents(el)
      const width = range.getBoundingClientRect().width
      el.style.fontSize = ''
      if (!width) return

      // em-widths the line takes up, minus the tuck-out on the left. The line now spans
      // exactly the column, so 100cqw / ratio fills it at any viewport without re-measuring.
      const ratio = width / base - shiftEm
      if (ratio <= 0) return
      el.style.setProperty('--fit-ratio', String(ratio))
      el.style.fontSize = 'min(var(--fit-max), calc((100cqw - 2px) / var(--fit-ratio)))'
    }

    el.style.setProperty('--fit-max', `${max}px`)
    measure()
    document.fonts?.ready.then(measure).catch(() => {})
  }, [max])

  return ref
}

/** Reveals blocks as they enter the viewport, mirroring the reference site's motion. */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    const pending = new Set(nodes)

    nodes.forEach((el) => {
      el.classList.add('reveal')
      const siblings = Array.from(el.parentElement?.children ?? [])
      const index = Math.max(0, siblings.indexOf(el))
      el.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 60}ms`)
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          pending.delete(entry.target as HTMLElement)
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 },
    )

    nodes.forEach((node) => io.observe(node))

    // Anything above the fold paints immediately rather than waiting on the observer.
    if (pending.size) {
      requestAnimationFrame(() => {
        pending.forEach((node) => {
          if (node.getBoundingClientRect().top < window.innerHeight) {
            node.classList.add('is-in')
            io.unobserve(node)
          }
        })
      })
    }

    return () => io.disconnect()
  }, [])
}

export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('id-ID', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date())
    setTime(format())
    const id = window.setInterval(() => setTime(format()), 15_000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return time
}
