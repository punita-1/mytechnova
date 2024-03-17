import React from 'react'
import CourseForm from './component/eventform'
import CourseList from './component/eventslist'

function Zust() {
  return (
    <div className='main-container'>
        <h1 style={{fontSize:'2.5rem',marginBottom:'2rem'}}>My course list</h1>
        <CourseForm/>
        <CourseList/>
      
    </div>
  )
}

export default Zust
