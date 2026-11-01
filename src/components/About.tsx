import { about, person, stats } from '../data/content'
import { useLocalTime } from '../hooks/useSite'

export default function About() {
  const time = useLocalTime(person.timezone)

  return (
    <section className="section" id="tentang">
      <div className="shell about">
        <div className="about-grid">
          <p className="eyebrow">
            <em>01</em> Lorem ipsum
          </p>
          <h2 className="sec-statement">{about.statement}</h2>
        </div>

        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>
                <span data-count={s.value}>{s.value}</span>
                <em>{s.suffix}</em>
              </b>
              <p>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="about-split">
          <div className="about-photo">
            <img src="/images/img-19.jpg" alt="Lorem ipsum dolor sit amet" loading="lazy" />
          </div>

          <div className="about-copy">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <aside className="about-aside">
            <div className="rating">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <span className="score">{about.rating}</span>
              <small>{about.trusted}</small>
            </div>
            <div className="avatars" aria-hidden="true">
              <img src="/images/img-4.jpg" alt="" loading="lazy" />
              <img src="/images/img-5.jpg" alt="" loading="lazy" />
              <img src="/images/img-6.jpg" alt="" loading="lazy" />
              <img src="/images/img-7.jpg" alt="" loading="lazy" />
            </div>
            <div className="clock">
              {about.localLabel} <b>{time}</b>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
