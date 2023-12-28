import React from 'react'

const Box = ({ title, color }) => {
  return (
    <article className='p-3' style={{background: `var(--proj-bg-${color})`}}>
        <img src="/src/assets/images/dog-sara-looking.jpg" alt="" 
            className='h-52 w-64 object-cover ml-auto mr-3'/>
        <h2>{title}</h2>
        <p>project description</p>
    </article>
  )
}

export default Box