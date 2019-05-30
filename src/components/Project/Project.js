import React from 'react';

const Project = ({title, stack, deets, goals, image}) => {

  return(
    <article className='project'>
      <img src={ image } className='project-image' />
      <section className='project-details'>
        <p className='project-title'>{ title }</p>
        <p className='tech-stack'><span className='project-subhead'>Tech Stack: </span>{ stack }</p>
        <section className='project-specifics'>
          <p>{ deets }</p>
          <p>{ goals }</p>
        </section>  
      </section>
    </article>
  )
}

export default Project;