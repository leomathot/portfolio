import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageContact() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/about")
  }

  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' required id="email" placeholder='email'/>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default PageContact