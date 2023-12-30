import React from 'react'

const Box = ({ title, color }) => {
  return (
    <article className='box p-3' style={{background: `var(--proj-bg-${color})`}}>
        <img src="/src/assets/images/dog-sara-looking.jpg" alt="" 
            className='h-72 w-full object-cover'/>
        <h2 className='my-4 font-[600]'>{title}</h2>
        <p>project description</p>
    </article>
  )
}

export default Box