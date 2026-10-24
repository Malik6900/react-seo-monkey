import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import usePageMeta from '../../usePageMeta'
import siteConfig from '../../siteConfig'

export default function Contact() {
  usePageMeta(
    'Contact | Spank the Monkey SEO',
    'Tell us about your website and what is bugging you about it. We will reply with next steps.'
  )

  const [form, setForm] = useState({ name: '', site: '', message: '' })
  const email = siteConfig.contactEmail

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  // No backend: the form opens the visitor's email app with the message filled in.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Website enquiry from ${form.name}`
    const body = `Name: ${form.name}\nWebsite: ${form.site}\n\n${form.message}`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <header className="page-banner">
        <h1>CONTACT</h1>
        <p>Tell us what's bugging you about your site.</p>
      </header>

      <main className="page-section">
        {email ? (
          <>
            <p>
              Fill in the form and it will open in your email app, ready to send. Or write to us
              directly at <a href={`mailto:${email}`}>{email}</a>.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" type="text" value={form.name} onChange={update('name')} required />

              <label htmlFor="contact-site">Your website</label>
              <input id="contact-site" type="text" placeholder="https://" value={form.site} onChange={update('site')} />

              <label htmlFor="contact-message">What's bugging you?</label>
              <textarea id="contact-message" rows="6" value={form.message} onChange={update('message')} required />

              <button type="submit" className="contact-form__button">Send message</button>
            </form>
          </>
        ) : (
          <p>
            Contact details are coming soon. In the meantime, <Link to="/sign-up">join the newsletter</Link> and
            we'll be in touch.
          </p>
        )}
      </main>
    </>
  )
}
