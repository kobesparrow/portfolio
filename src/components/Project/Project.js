import React from 'react';

const Project = ({title, stack, deets, goals}) => {

  return(
    <div>
      <p>{ title }</p>
      <p>{ stack }</p>
      <p>{ deets }</p>
      <p>{ goals }</p>
    </div>
  )
}

export default Project;