import React from 'react';
import Project from '../Project/Project';
import chevron from '../../images/chevron.svg';
import { projectData } from '../../utils/project-data';

const Projects = () => {
  let projectInfo = projectData.map(project => {
    return <Project { ...project } />
  })
  
  return(
    <section className='projects-section' id='projects'>
      <h2>PROJECTS</h2>
      <section className='projects-display'>
        { projectInfo }
      </section>
      <img src={ chevron } className='chevron' alt='down arrow'/>
    </section>
  )
}

export default Projects;