import { useState } from 'react'
import { faqs } from '../data/content'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="section" id="faq">
      <div className="shell">
        <div className="faq">
          <div className="faq-side">
            <p className="eyebrow">
              <em>05</em> Lorem ipsum
            </p>
            <h2 className="sec-title">Lorem ipsum dolor sit amet</h2>
            <p className="lead" style={{ maxWidth: '30ch' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <a className="link-arrow" href="#kontak">
              Lorem ipsum <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="faq-list">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i
              return (
                <div className="faq-item" key={f.q} data-open={isOpen}>
                  <button
                    className="faq-q"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <h3>{f.q}</h3>
                    <span className="faq-x" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id={`faq-a-${i}`}>
                    <div>
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
