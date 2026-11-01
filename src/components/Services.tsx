import { useState } from 'react'
import { services } from '../data/content'

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section" id="layanan">
      <div className="shell">
        <div className="sec-head" style={{ marginBottom: 52 }}>
          <p className="eyebrow">
            <em>03</em> Lorem ipsum
          </p>
          <div>
            <h2 className="sec-title" style={{ marginBottom: 18 }}>
              Lorem ipsum
            </h2>
            <p className="lead" style={{ maxWidth: '44ch' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>

        <div className="svc-list">
          {services.map((s, i) => {
            const isOpen = openIndex === i
            return (
              <article className="svc" key={s.num} data-open={isOpen}>
                <button
                  className="svc-btn"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`svc-panel-${s.num}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="svc-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <span className="svc-plus" aria-hidden="true" />
                </button>
                <div className="svc-panel" id={`svc-panel-${s.num}`}>
                  <div>
                    <div className="svc-body">
                      <p>{s.description}</p>
                      <div className="svc-tags">
                        {s.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
