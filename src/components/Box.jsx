import React from 'react'

const Box = ({ title, color }) => {

  const grad1 = 'bg-gradient-to-br from-cyan-900/90 via-teal-900/80 to-purple-900/40'
  const grad2 = 'bg-gradient-to-br from-teal-900/80 via-purple-900/40 to-cyan-900/90'
  const grad3 = 'bg-gradient-to-br from-purple-900/40 via-cyan-900/90 to-teal-900/80'

  let grad = color == 1 ? grad1 : color == 2 ? grad2 : grad3

  return (
    <article className={ `box group p-2 sm:p-3 ${grad} 
      hover:from-transparent 
      hover:to-transparent
      hover:bg-[rgba(24,26,30,0.9)] 
      hover:scale-105
      duration-200` }
    >
        <img src="/src/assets/images/dog-sara-looking.jpg" alt="Project screen shot" 
            className='h-72 w-full object-cover'/>
        <h3 className='my-4 font-[600] group-hover:text-cyan-500'>{title}</h3>
        <p>project description</p>
    </article>
  )
}

export default Box