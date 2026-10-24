import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './Pages.css'
import usePageMeta from '../../usePageMeta'

export default function Signup() {
    usePageMeta(
      'Newsletter | Spank the Monkey SEO',
      'Join the Spank the Monkey SEO newsletter. One or two emails a year, and you can unsubscribe whenever.'
    )

    return (
      <>
        <header className="page-banner">
          <h1>SIGN UP</h1>
          <p>One or two emails a year. Unsubscribe whenever.</p>
        </header>
        <main className="page-section">
          <p>Leave your email and we'll send you the occasional SEO tip worth reading.</p>
          <div className="signup-box">
            <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
          </div>
        </main>
      </>
  )
}
