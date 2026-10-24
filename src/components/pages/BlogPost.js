import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Pages.css'
import usePageMeta from '../../usePageMeta'
import posts from '../../data/posts'
import { formatDate } from './Blog'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  usePageMeta(
    post ? `${post.title} | Spank the Monkey SEO` : 'Page not found | Spank the Monkey SEO',
    post ? post.description : ''
  )

  if (!post) return <NotFound />

  return (
    <>
      <header className="page-banner page-banner--post">
        <h1>{post.title}</h1>
        <p><time dateTime={post.date}>{formatDate(post.date)}</time></p>
      </header>

      <article className="page-section">
        {post.body.map((block, i) =>
          block.h ? <h2 key={i}>{block.h}</h2> : <p key={i}>{block.p}</p>
        )}

        <div className="page-cta">
          <h2>Want this checked on your site?</h2>
          <p>We run these checks as part of every audit.</p>
          <Link to="/services" className="page-cta__button">See services</Link>
        </div>
        <p className="post-back"><Link to="/blog">&larr; All articles</Link></p>
      </article>
    </>
  )
}
