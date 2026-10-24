import React from 'react'
import './HowItWorks.css'

const steps = [
  { n: '1', title: 'Audit', text: 'We crawl your site and list every problem we find.' },
  { n: '2', title: 'Prioritize', text: 'You get the list sorted by impact, with plain-English notes on each item.' },
  { n: '3', title: 'Fix', text: 'We make the changes ourselves or hand your developer exact instructions.' },
  { n: '4', title: 'Measure', text: 'Search Console and Analytics show whether it worked.' },
]

export default function HowItWorks() {
  return (
    <section className="how">
      <h2>HOW IT WORKS</h2>
      <ol className="how__steps">
        {steps.map((s) => (
          <li key={s.n} className="how__step">
            <span className="how__num">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
