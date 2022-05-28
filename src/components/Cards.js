import React from 'react'
import Carditem from './Carditem'
import './Card.css'

export default function Cards() {
  return (
    <div className="cards">
        <h1>EXPLORE IT Now!! Short Left...</h1>
        <div classname="cards__wrapper">
            <ul className="cards__items">
                <Carditem 
                    img="../../images/img-9.jpg"
                    text="Explore your country"
                    label="Adventure"
                    path="/services"
                />
                <Carditem 
                    img="../../images/img-2.jpg"
                    text="Explore your country"
                    label="Adventure"
                    path="/products"
                />
                <Carditem 
                    img="../../images/img-3.jpg"
                    text="Explore your country"
                    label="Adventure"
                    path="/services"
                />
            </ul>
            <ul className="cards__items">
                <Carditem 
                    img="../../images/img-9.jpg"
                    text="Explore your country"
                    label="Adventure"
                    path="/services"
                />
                <Carditem 
                    img="../../images/img-2.jpg"
                    text="Explore your country"
                    label="Adventure"
                    path="/products"
                />
                <Carditem 
                    img="../../images/img-3.jpg"
                    text="Explore your country"
                    label="Adventure"
                    path="/services"
                />
            </ul>
        </div>
    </div>
  )
}
