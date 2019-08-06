import React from 'react';
import headshot from '../../images/mark-profile.jpeg';
import chevron from '../../images/chevron.svg';

const About = () => {
  
  return(
    <section className='about-section' id='about'>
      <h2>ABOUT</h2>
      <section className='about-details'>
        <img src={ headshot } className='headshot' alt='Mark Collins headshot'/>
        <p className='about-text'>Given a lifetime at keyboards typing marketing copy, novels, and travel pieces, I found a place to combine my disparate professional experiences: writing code.
        <br />   
        <br />   
        Through software development I share my passions and experiences with like-minded individuals, working together to build intuitively-designed, solution-driven products to delight users and meet their needs.
        </p>
      </section>
      <section className='about-columns'>
        <article className='about-tech-stack'>
          <h3>Tech Stack</h3>
          <hr />
          <dl>
            <dt>• Javascript</dt>
            <dt>• React</dt>
            <dd>- Redux</dd>
            <dd>- Router</dd>
            <dd>- Angular</dd>
            <dd>- JQUERY</dd>
            <dt>• CSS</dt>
            <dd>- Sass</dd>
            <dt>• HTML</dt>
            <dt>• Java</dt>
            <dt>• PHP</dt>
            <dt>• PostreSQL</dt>
            <dt>• Jest/Enzyme</dt>
            <dt>• Mocha/Chai</dt>
            <dt>• Git/GitHub</dt>
            <dt>• Weback/Babel</dt>
            <dt>• WordPress</dt>
            <dt>• VS Code</dt>
          </dl>  
        </article>
        <article className='about-education'>
          <h3>Education</h3>
          <hr />
          <p className='header'>Turing School of Software and Design</p>
          <p className='subhead'>Front-end engineering, 2019</p>
          <br />
          <p className='header'>Colorado State University</p>
          <p className='subhead'>BA in Journalism, 2007</p>
          <p className='subhead'>Concentration in news, editorial and technical communication</p>
        </article> 
        <article className='about-experience'>
          <h3>Experience</h3>
          <hr />
          <p className='header'>Web Developer</p>
          <p className='subhead'>University of Texas at Austin</p>
          <p className='job-details'>Rebuilt department website with modular CMS, incorporating SQL-accessible research resources for staff while accommodating front-facing recruitment resources</p>
          <br />
          <p className='header'>SEO Marketing Manager</p>
          <p className='subhead'>First Online Solutions</p>
          <p className='job-details'>Managed a network of more than 40 travel blogs; assisted writers, edited copy, made design decisions, collaborated with social media, and managed a team of developers</p>
          <br />
        </article>  
      </section>
      <img src={ chevron } className='chevron' alt='down arrow'/>
    </section>
  )
}

export default About;