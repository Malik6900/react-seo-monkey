import React from 'react'
import '../App.css'
import './Hero.css'
import { Button } from './Button'

export default function Hero() {
  return (
    <div className="hero-container">
        {/* <video src="../videos/video-2.mp4" autoPlay loop muted /> */}
        <h1>SEO AWAITS</h1>
        <p>Find what's holding your site back, fix it, then check it worked.</p>
        <div className="hero-btns">
            <Button className='btns' to="/contact" buttonStyle="btn--outline" buttonSize="btn--large">
                GET STARTED
            </Button>
            <Button className='btns' to="/services" buttonStyle="btn--primary" buttonSize="btn--large">
                SEE SERVICES
            </Button>
        </div>
    </div>
  )
}
