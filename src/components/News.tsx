import { articles } from '../data/content'

export default function News() {
  return (
    <section className="section" id="blog">
      <div className="shell">
        <div className="news-head">
          <p className="eyebrow">
            <em>06</em> Lorem ipsum
          </p>
          <h2 className="sec-title" style={{ maxWidth: '17ch' }}>
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <a className="link-arrow" href="#blog">
            Lorem ipsum <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="news-grid">
          {articles.map((a) => (
            <a className="news-card" key={a.title} href="#blog">
              <div className="news-thumb">
                <img src={a.image} alt="" loading="lazy" />
              </div>
              <h3>{a.title}</h3>
              <time>{a.date}</time>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
