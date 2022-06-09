import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import '../../App.css'


export default function Signup() {
    return (
      <>
      <h1 className="sign-up">Sign Up</h1>
            <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
         

      </>
  )
}