import React from 'react'
import Carditem from './Carditem'
import './Card.css'

export default function Cards() {
  return (
    <div className="cards">
        <h1>EXPLORE SEO MONKEY!!!</h1>
        <br /><br />
        <div classname="cards__wrapper">
            <ul className="cards__items">
                <Carditem 
                    img={process.env.PUBLIC_URL + "/images/img-9.jpg"}
                    text="Explore SEO"
                    label="SEO"
                    path="/services"
                />
                <Carditem 
                    img={process.env.PUBLIC_URL + "/images/img-2.jpg"}
                    text="Explore your country"
                    label="Adventure"
                    path="/products"
                />
                <Carditem 
                    img={process.env.PUBLIC_URL + "/images/img-3.jpg"}
                    text="Explore your country"
                    label="Adventure"
                    path="/services"
                />
            </ul>
            <ul className="cards__items">
                <Carditem 
                    img={process.env.PUBLIC_URL + "/images/img-5.jpg"}
                    text="Explore your country"
                    label="Adventure"
                    path="/services"
                />
                <Carditem 
                    img={process.env.PUBLIC_URL + "/images/img-4.jpg"}
                    text="Explore your country"
                    label="Adventure"
                    path="/products"
                />
                <Carditem 
                      img={process.env.PUBLIC_URL + "/images/img-1.jpg"}
                    text="Explore your country"
                    label="Adventure"
                    path="/services"
                />
            </ul>
        </div>
    </div>
  )
}
