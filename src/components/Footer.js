import React from 'react'

//import { Button } from './Button'
import { Buttonlink } from './Buttonlink'
import './Footer.css'
import { Link } from 'react-router-dom'

import MailchimpSubscribe from "react-mailchimp-subscribe"

export default function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join our Newsletter...
            </p>
            <p ClassName="footer-subscription-text">
                You can unsubscribe whenever.
            </p>
            <div className="input-areas">
                <MailchimpSubscribe buttonStyle="btn--outline"  url={process.env.REACT_APP_MAILCHIMP_URL} />
              </div>
              <div>
                  <p>Don't worry I am very lazy at content writing so you will not spammed at all, or a lot, ok may once in a year.</p>
              </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                        trsvlSA <i class="fa-solid fa-earth-africa"></i>
                    </Link>
                </div>
                <small className="website-rights">
                <p class="d-caption copyright">
                trvlSA <i class="fa-solid fa-earth-africa"></i> {new Date().getUTCFullYear()} © All Rights Reserved
                </p>
                </small>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook fa-2x"></i></a>
                    <Link to={{ pathname: "https://facebook.com" }} target="_blank" aria-label="Facebook" className="social-icon-link facebook">Facebook</Link>

                    <Link to={{ pathname: "https://www.facebook.com"}}>
                    <Buttonlink variant="contained" className="py-1 px-2"><i className="ri-upload-2-line pe-2"></i> Facebook</Buttonlink>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}
