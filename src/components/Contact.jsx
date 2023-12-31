import React from 'react'

const Contact = () => {


  return (
    <section id='contact' className='py-10  bg-[rgba(24,24,24,0.1)]'>
      <div className='max-width'>
        <h2 className='mb-10'>Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora aperiam, ab quae soluta corrupti placeat perspiciatis, quidem quas quibusdam minus voluptatem neque, doloribus nemo rem molestias quia. Earum, sapiente?</p>

        <form action='https://formspree.io/f/mayzbkjj' method='POST'
          className='max-w-[500px] mx-auto mt-10 
          bg-gradient-to-br
          from-sky-900/80 
          via-purple-900/40
          to-teal-900/80'
        >

          <label htmlFor='name'>Name</label>
          <input id='name' name='name' type='text' required aria-required='true' />

          <label htmlFor='email'>Email</label>
          <input id='email' name='email' type='email' required aria-required='true' />

          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' required aria-required='true'/>

          <button className='bg-[var(--black)] hover:bg-teal-950' 
            type='submit'>Send</button>
          
        </form>

      </div>
    </section>
  )
}

export default Contact