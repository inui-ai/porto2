import { useState } from 'react'
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
