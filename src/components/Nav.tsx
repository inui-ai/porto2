import { useEffect, useState } from 'react'
import { useScrolled } from '../hooks/useSite'

const links = [
  { href: '#tentang', label: 'Lorem' },
  { href: '#karya', label: 'Ipsum' },
  { href: '#layanan', label: 'Dolor' },
  { href: '#blog', label: 'Sit amet' },
]

export default function Nav() {
  const solid = useScrolled(24)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    // Going back to the desktop layout must not leave the sheet open behind it.
    const desktop = window.matchMedia('(min-width: 861px)')
    const onDesktop = () => desktop.matches && setOpen(false)

    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onDesktop)
    document.body.classList.add('nav-open')

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onDesktop)
      document.body.classList.remove('nav-open')
    }
  }, [open])

  return (
    <header className={`nav${solid ? ' nav--solid' : ''}`}>
      <a className="wordmark" href="#atas" aria-label="Example, kembali ke atas">
        Example<sup>®</sup>
      </a>

      <nav className="nav-links" aria-label="Lorem ipsum dolor">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="nav-right">
        <a className="nav-cta" href="#kontak">
          Lorem ipsum
        </a>
        <button
          className="nav-burger"
          type="button"
          aria-label={open ? 'Lorem ipsum dolor' : 'Lorem ipsum amet'}
          aria-expanded={open}
          aria-controls="menu-seluler"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      <div className="nav-sheet" data-open={open} id="menu-seluler" aria-hidden={!open} onClick={() => setOpen(false)}>
        {links.map((l) => (
          <a key={l.href} href={l.href} tabIndex={open ? 0 : -1}>
            {l.label}
          </a>
        ))}
        <a href="#kontak" tabIndex={open ? 0 : -1}>
          Lorem ipsum
        </a>
      </div>
    </header>
  )
}
