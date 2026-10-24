import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import usePageMeta from '../../usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found | Spank the Monkey SEO', '')

  return (
    <>
      <header className="page-banner">
        <h1>404</h1>
        <p>The monkey ate this page.</p>
      </header>
      <main className="page-section">
        <p>We couldn't find that page. Try the <Link to="/">home page</Link>, the <Link to="/services">services</Link> or the <Link to="/blog">blog</Link>.</p>
      </main>
    </>
  )
}
