import React from 'react'
import CarouselComponent from './Carousel'
import './previously.css'
import { NavLink } from 'react-router-dom'
import { Button } from "../src/styles/Button";
function Previously() {
  return (
    <div className='previouly-section-wrapper'>
      <div className="previously-section" data-animate-on-scroll>
          <div className="home_heading previously">"Moments in Time"</div>
          <div className="explore-the-past"><p>
            "Explore the past triumphs and memorable moments that have shaped
            the legacy of our university's innovative spirit."
            </p>
          </div>
          
          <Button className='btn eventpage-btn' style={{marginTop:"10px"}}>
                    <NavLink to='/gallery'>Visit Gallery</NavLink>
                </Button>
          </div>
          
          <CarouselComponent first="./images/301.jpeg" second="./images/301.jpeg" third="./images/301.jpeg"/>
    </div>
  )
}

export default Previously
