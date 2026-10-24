import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import usePageMeta from '../../usePageMeta'

export default function About() {
  usePageMeta(
    'About | Spank the Monkey SEO',
    'How Spank the Monkey SEO works: written findings, no ranking guarantees, and results measured in your own Search Console and Analytics data.'
  )

  return (
    <>
      <header className="page-banner">
        <h1>ABOUT THE MONKEY</h1>
        <p>SEO without the voodoo.</p>
      </header>

      <main className="page-section">
        <h2>What we do</h2>
        <p>
          We work on technical SEO, on-page SEO, visibility in AI answers (GEO), link building and
          tracking. In plain terms, we look for the reasons a website isn't showing up where it should,
          fix the ones we can, and tell you about the rest.
        </p>

        <h2>How we work</h2>
        <ul>
          <li>
            <strong>We write it down.</strong> You get the list of problems, the reason each one matters,
            and a record of what changed.
          </li>
          <li>
            <strong>We say what we find, including good news.</strong> If your site is in better shape than
            you feared, you'll hear that too.
          </li>
          <li>
            <strong>No ranking guarantees.</strong> Search results depend on things nobody outside Google
            controls. Anyone who promises you position one is guessing.
          </li>
          <li>
            <strong>We use your data.</strong> Search Console and Analytics show whether the work paid off,
            so the proof comes from your own accounts and not from a screenshot of a tool.
          </li>
        </ul>

        <h2>Why a monkey?</h2>
        <p>
          Every site has one: the problem that's been on its back for months and keeps getting
          pushed to next week. We're here to deal with it.
        </p>

        <div className="page-cta">
          <h2>Got a monkey?</h2>
          <p>Tell us about your site and what's bugging you about it.</p>
          <Link to="/contact" className="page-cta__button">Get in touch</Link>
        </div>
      </main>
    </>
  )
}
