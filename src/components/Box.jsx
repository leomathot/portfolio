import React from 'react'

const Box = ({ title, color }) => {

  const grad1 = 'bg-gradient-to-br from-sky-900/80 via-teal-900/80 to-purple-900/40'
  const grad2 = 'bg-gradient-to-br from-teal-900/80 via-purple-900/40 to-sky-900/80'
  const grad3 = 'bg-gradient-to-br from-purple-900/40 via-sky-900/80 to-teal-900/80'

  let grad = color == 1 ? grad1 : color == 2 ? grad2 : grad3

  return (
    <article className={ `p-3 ${grad} 
      hover:from-transparent 
      hover:to-transparent
      hover:bg-neutral-950/70 
      duration-200` }
    >
        <img src="/src/assets/images/dog-sara-looking.jpg" alt="Project screen shot" 
            className='h-72 w-full object-cover'/>
        <h2 className='my-4 font-[600]'>{title}</h2>
        <p>project description</p>
    </article>
  )
}

export default Box