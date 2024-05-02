import React from 'react'

const Contact = () => {


  return (
    <section id='contact' className='py-10 bg-zinc-900/20'>
      <div className='max-width'>
        <h2 className='mb-10 text-lg font-[600] text-cyan-400'>Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora aperiam, ab quae soluta corrupti placeat perspiciatis, quidem quas quibusdam minus voluptatem neque, doloribus nemo rem molestias quia. Earum, sapiente?</p>

        {/* contact form */}
        <form action='https://formspree.io/f/mayzbkjj' method='POST'
          className='
            w-[95%] max-w-[500px] mx-auto mt-10 
            shadow-md shadow-zinc-900/50
            bg-gradient-to-br
            from-sky-900/70 
            to-purple-900/60'
        >

          <label htmlFor='name'>Name</label>
          <input id='name' name='name' type='text' required aria-required='true' />

          <label htmlFor='email'>Email</label>
          <input id='email' name='email' type='email' required aria-required='true' />

          <label htmlFor='subject'>Subject</label>
          <input id='subject' name='subject' type='text' required aria-required='true' />

          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' rows="6" required aria-required='true'/>

          <button type='submit'>Send</button>
          
        </form>

      </div>
    </section>
  )
}

export default Contact