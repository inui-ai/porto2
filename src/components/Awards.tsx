import { awards, gallery } from '../data/content'

export default function Awards() {
  return (
    <>
      <section className="section" id="penghargaan">
        <div className="shell">
          <div className="awards-head">
            <p className="eyebrow">
              <em>04</em> Lorem ipsum
            </p>
            <h2 className="sec-statement">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </h2>
          </div>

          <div className="awards-list">
            {awards.map((a) => (
              <div className="award-row" key={a.title}>
                <span className="yr">{a.year}</span>
                <h3>{a.title}</h3>
                <span className="org">{a.org}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="gallery">
          <figure className="tall">
            <img src={gallery[3]} alt="Lorem ipsum dolor sit amet" loading="lazy" />
          </figure>
          <figure>
            <img src={gallery[0]} alt="Consectetur adipiscing elit" loading="lazy" />
          </figure>
          <figure>
            <img src={gallery[1]} alt="Sed do eiusmod tempor" loading="lazy" />
          </figure>
        </div>
      </div>
    </>
  )
}
