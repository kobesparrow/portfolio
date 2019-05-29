import React from 'react';
import Project from '../Project/Project';
import { projectData } from '../../utils/project-data';

const Projects = () => {
  let projectInfo = projectData.map(project => {
    return <Project { ...project } />
  })
  
  return(
    <section className='projects-section'>
      <h2>PROJECTS</h2>
      <section className='projects-display-one'>
        { projectInfo }
      </section>
    </section>
  )
}

export default Projects;