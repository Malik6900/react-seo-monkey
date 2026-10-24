import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import usePageMeta from '../../usePageMeta'
import posts from '../../data/posts'

export const formatDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export default function Blog() {
  usePageMeta(
    'SEO Tips and Guides | Spank the Monkey SEO',
    'Practical SEO and GEO guides: technical checks, AI search visibility and how to read Google Search Console.'
  )

  return (
    <>
      <header className="page-banner">
        <h1>BLOG</h1>
        <p>SEO tips, minus the hype.</p>
      </header>

      <main className="page-section">
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-list__item">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.description}</p>
              <Link to={`/blog/${post.slug}`} className="post-list__more">Read the article</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
