import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import usePageMeta from '../../usePageMeta'
import services from '../../data/services'

export default function Services() {
  usePageMeta(
    'SEO Services | Spank the Monkey SEO',
    'Technical SEO audits, on-page SEO, GEO for AI search, link building, tracking and site fixes. Find what holds your site back, fix it, and check that it worked.'
  )

  return (
    <>
      <header className="page-banner">
        <h1>SERVICES</h1>
        <p>Six ways we get monkeys off backs.</p>
      </header>

      <main className="page-section">
        {services.map((s) => {
          const Icon = s.icon
          return (
            <section className="service-block" id={s.slug} key={s.slug}>
              <div className="service-block__icon"><Icon /></div>
              <div>
                <h2>{s.title}</h2>
                <p className="service-block__tagline">{s.tagline}</p>
                <p>{s.body}</p>
                <ul>
                  {s.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </section>
          )
        })}

        <div className="page-cta">
          <h2>Not sure which one you need?</h2>
          <p>Most people start with the audit. It shows what's wrong and what to do about it first.</p>
          <Link to="/contact" className="page-cta__button">Get in touch</Link>
        </div>
      </main>
    </>
  )
}
