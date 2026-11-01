import { person } from '../data/content'
import { useFitText } from '../hooks/useSite'

const socials = [
  { label: 'Lorem', href: '#' },
  { label: 'Ipsum', href: '#' },
  { label: 'Dolor', href: '#' },
  { label: 'Amet', href: '#' },
]

export default function Footer() {
  const wordRef = useFitText<HTMLSpanElement>(520)

  return (
    <footer className="footer" id="kontak">
      <div className="shell">
        <div className="contact">
          <div className="contact-left">
            <div className="contact-photo">
              <img src="/images/img-13.jpg" alt="Lorem ipsum dolor sit amet" loading="lazy" />
            </div>
            <p className="eyebrow">
              <em>07</em> Lorem ipsum
            </p>
            <h2>
              Lorem ipsum? <br />
              Dolor sit amet.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <a className="contact-mail" href={`mailto:${person.email}`}>
              {person.email}
            </a>
          </div>

          <form className="form" onSubmit={(e) => e.preventDefault()} aria-label="Lorem ipsum dolor">
            <div className="form-row">
              <div className="field">
                <label htmlFor="nama">Lorem</label>
                <input id="nama" name="nama" type="text" placeholder="Lorem ipsum" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Ipsum</label>
                <input id="email" name="email" type="email" placeholder="lorem@example.com" autoComplete="email" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="perusahaan">Dolor</label>
              <input id="perusahaan" name="perusahaan" type="text" placeholder="Lorem ipsum (dolor sit)" />
            </div>

            <div className="field">
              <label htmlFor="pesan">Sit amet</label>
              <textarea id="pesan" name="pesan" rows={4} placeholder="Lorem ipsum dolor sit amet…" />
            </div>

            <button className="form-submit" type="submit">
              Lorem ipsum
            </button>
            <p className="form-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
          </form>
        </div>
      </div>

      <div className="foot-big" aria-hidden="true">
        <span ref={wordRef}>
          Example<sup>®</sup>
        </span>
      </div>

      <div className="shell">
        <div className="foot-bar">
          <div>
            {socials.map((s, i) => (
              <a key={`${s.label}-${i}`} href={s.href}>
                {s.label}
              </a>
            ))}
          </div>
          <div className="foot-mark">
            <img src="/images/logo-mark.svg" alt="" loading="lazy" />
            <span>© {new Date().getFullYear()} Example</span>
          </div>
          <div className="right">
            <span>{person.based}</span>
            <a href="#atas">Lorem ipsum ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
