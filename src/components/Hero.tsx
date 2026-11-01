import { logos, person, projects } from '../data/content'
import { useFitText } from '../hooks/useSite'
import { ShaderBackground } from './ui/ShaderBackground'

export default function Hero() {
  const nameRef = useFitText<HTMLHeadingElement>(420)

  return (
    <section className="hero" id="atas">
      <div className="shell">
        <div className="hero-top">
          <div className="hero-shader" aria-hidden="true">
            <ShaderBackground />
          </div>

          <h1 className="hero-name" ref={nameRef}>
            <span>Example</span>
            <span style={{ fontSize: '0.26em', verticalAlign: 'super', letterSpacing: '-0.02em' }}>®</span>
          </h1>
        </div>

        <div className="hero-blurb">
          <p>{person.blurb}</p>
          <span className="hero-loc">
            {person.based.split(' ')[0]} <b>{person.based.split(' ').slice(1).join(' ')}</b>
          </span>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...logos, ...logos, ...logos, ...logos].map((name, i) => (
            <span className="marquee-logo" key={`${name}-${i}`} data-variant={i % 3}>
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="shell">
        <div className="work-grid" id="karya">
          {projects.map((p, i) => (
            <a className="work-cell" key={`${p.media.src}-${i}`} href="#karya" aria-label={`${p.name}, ${p.year}`}>
              {p.media.type === 'video' ? (
                <video src={p.media.src} autoPlay muted loop playsInline preload="metadata" />
              ) : (
                <img src={p.media.src} alt="Lorem ipsum dolor sit amet" loading="lazy" />
              )}
              <div className="work-cell__meta">
                <h3>{p.name}</h3>
                <span>
                  {p.client} · {p.year}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="work-ticker" aria-hidden="true">
          {projects.concat(projects).map((p, i) => (
            <span key={`${p.name}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 18 }}>
              <i />
              <b>{p.name}</b> {p.year}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
