import React from 'react'
import './prev.css'
import CarouselComponent from './Carousel'
import './previously.css'
import { NavLink } from 'react-router-dom'
import { Button } from "../src/styles/Button";
function Previously() {
  return (
    
    <div className="prev-container">
      <h2>"Moments in Time"</h2>
      <div className="text-container">
        <div >
          "Explore the past triumphs and memorable moments that have shaped
          the legacy of our university's innovative spirit."
        </div>
        <div>
          <Button className='btn eventpage-btn'>
            <NavLink to='/gallery'>Visit Gallery</NavLink>
          </Button>
        </div>
      </div>
      <div className="carousel-container">
        <CarouselComponent first="./images/301.jpeg" second="./images/301.jpeg" third="./images/301.jpeg" />
      </div>
    </div>
  )
}

export default Previously