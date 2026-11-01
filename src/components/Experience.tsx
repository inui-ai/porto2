import { experiences } from '../data/content'

export default function Experience() {
  return (
    <>
      <section className="section" id="pengalaman">
        <div className="shell">
          <div className="exp-head">
            <div>
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                <em>02</em> Lorem ipsum
              </p>
              <h2 className="sec-title">Lorem ipsum dolor</h2>
            </div>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="exp-list">
            {experiences.map((e, i) => (
              <article className="exp-row" key={`${e.company}-${i}`}>
                <h3>{e.role}</h3>
                <div className="co">
                  {e.company}
                  <span>{e.location}</span>
                </div>
                <div className="years">{e.period}</div>
                <p>{e.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reel" aria-labelledby="reel-title">
        <video src="/videos/video-3.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        <a className="reel-btn" href="#karya" id="reel-title">
          Lorem ipsum
        </a>
      </section>
    </>
  )
}
