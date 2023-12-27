import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjGames() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/")
  }

  return (
      <div>
      <h2>Games</h2>
      <form onSubmit={handleSubmit}>
        <input type='email' required id="email" placeholder='email'/>
        <input type="submit" value="Submit" />
      </form>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae blanditiis repellat sequi rerum doloribus quibusdam at sunt optio vel, eveniet voluptatem expedita quasi nobis, et veniam quo facere! Nesciunt, architecto.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae blanditiis repellat sequi rerum doloribus quibusdam at sunt optio vel, eveniet voluptatem expedita quasi nobis, et veniam quo facere! Nesciunt, architecto.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae blanditiis repellat sequi rerum doloribus quibusdam at sunt optio vel, eveniet voluptatem expedita quasi nobis, et veniam quo facere! Nesciunt, architecto.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae blanditiis repellat sequi rerum doloribus quibusdam at sunt optio vel, eveniet voluptatem expedita quasi nobis, et veniam quo facere! Nesciunt, architecto.</p>
    </div>
  )
}

export default ProjGames