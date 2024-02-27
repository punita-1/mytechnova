import React from 'react'
import { useParams } from 'react-router-dom'

const Register_form = () => {
  const { id } = useParams();
  return (
    <div>
      <div>
        my register form
      </div>
      <div>{id}</div>
    </div>
  )
}

export default Register_form
