import React from 'react'

const Box = ({ title, color }) => {

  const grad1 = 'bg-gradient-to-br from-sky-800/70 via-teal-800/70 to-purple-900/60'
  const grad2 = 'bg-gradient-to-br from-teal-800/70 via-purple-900/60 to-sky-800/70'
  const grad3 = 'bg-gradient-to-br from-purple-900/60 via-sky-800/70 to-teal-800/70'

  let grad = color == 1 ? grad1 : color == 2 ? grad2 : grad3

  return (
    <article
      className={`
        box group p-2 sm:p-3 ${grad} 
        hover:from-transparent 
        hover:to-transparent
        hover:bg-zinc-900/90 
        hover:scale-105 
        shadow-md shadow-zinc-900/50
        hover:shadow-none
        duration-200
      `}
    >
      <img src="./assets/images/dog-sara-looking.jpg" alt="Project screen shot"
        className='h-72 w-full object-cover' />
      <h3 className='my-4 font-[600]'>{title}</h3>
      <p className='group-hover:text-zinc-300'>project description</p>
    </article>
  )
}

export default Box