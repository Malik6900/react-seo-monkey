import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import services from '../data/services'

export default function Cards() {
  return (
    <div className="cards">
        <h1>WHAT WE DO</h1>
        <ul className="tiles">
            {services.map((s) => {
                const Icon = s.icon
                return (
                    <li className="tiles__item" key={s.slug}>
                        <Link to={`/services#${s.slug}`} className="tiles__link">
                            <span className="tiles__icon"><Icon /></span>
                            <h2 className="tiles__title">{s.title}</h2>
                            <p className="tiles__text">{s.tagline}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
