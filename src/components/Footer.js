import React from 'react'

//import { Button } from './Button'
//import { Buttonlink } from './Buttonlink'
import './Footer.css'
import { Link } from 'react-router-dom'
import { SiMailchimp } from "react-icons/si";
import { GiMonkey } from "react-icons/gi";
import siteConfig from '../siteConfig'

import MailchimpSubscribe from "react-mailchimp-subscribe"

export default function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Newsletter...
            </p>
            <p className="footer-subscription-text">
                You may unsubscribe whenever.
            </p>
            <div className="input-areas">
                <MailchimpSubscribe buttonStyle="btn--outline"  url={process.env.REACT_APP_MAILCHIMP_URL} />
              </div>
              <div>
                  <p className="mail-chimp"><SiMailchimp /></p>
                  <p className="text-clr">eMail by MailChimp</p>
                  <p className="spam-msg">Don't worry you will not get spammed, maybe one or two emails a year.</p>

                  

              </div>
        </section>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                          <span className="thin-text-footer">spank</span>
                          <span className="thin-the-footer">the</span>
                          <span>monkey</span>
                          <span className="monkey-icon-footer"><GiMonkey /></span>
                          <span>SEO</span>
                    </Link>
                </div>
                <small className="website-rights">
                <p className="d-caption copyright">
                          spankthemonkey <GiMonkey /> SEO {new Date().getUTCFullYear()} © All Rights Reserved.
                </p>
                </small>
                <nav className="footer-links">
                      <Link to="/services">Services</Link>
                      <Link to="/blog">Blog</Link>
                      <Link to="/about">About</Link>
                      <Link to="/contact">Contact</Link>
                </nav>
                {siteConfig.social.length > 0 && (
                    <div className="social-icons">
                          {siteConfig.social.map((s) => (
                              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}><i className={`${s.icon} fa-1x`}></i></a>
                          ))}
                    </div>
                )}
            </div>
        </section>
    </div>
  )
}
