import React from 'react';

const Project = ({title, stack, deets, goals, image}) => {

  return(
    <article className='project'>
      <img src={ image } className='project-image' />
      <p>{ title }</p>
      <p>{ stack }</p>
      <p>{ deets }</p>
      <p>{ goals }</p>
    </article>
  )
}

export default Project;