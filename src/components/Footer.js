import React from 'react'

//import { Button } from './Button'
//import { Buttonlink } from './Buttonlink'
import './Footer.css'
import { Link } from 'react-router-dom'
import { SiMailchimp } from "react-icons/si";
import { GiMonkey } from "react-icons/gi";

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
                  <p className="spam-msg">Don't worry I am a lazy content creator so you will not get spammed, maybe one or two emails a year.</p>

                  

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
                <p class="d-caption copyright">
                          beatthemonkey <GiMonkey /> SEO {new Date().getUTCFullYear()} © All Rights Reserved.
                </p>
                </small>
                <div className="social-icons">
                      <a href="https://facebook.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook-f fa-2x"></i></a>
                      <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter fa-2x"></i></a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin-in fa-2x"></i></a>
                </div>
            </div>
        </section>
    </div>
  )
}
