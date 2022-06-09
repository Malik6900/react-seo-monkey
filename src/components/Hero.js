import React from 'react'
import '../App.css'
import './Hero.css'
import { Button } from './Button'

export default function Hero() {
  return (
    <div className="hero-container">
        {/* <video src="../videos/video-2.mp4" autoPlay loop muted /> */}
        <h1>SEO AWAITS</h1>
        <p>What are we doing?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle="btn--outline" buttonSize="btn--large">
                GET STRATED
            </Button>
            <Button className='btns' buttonStyle="btn--primary" buttonSize="btn--large">
                WATCH TRAILER <i className="far fa-play-circle" />
            </Button>
        </div>
    </div>
  )
}
