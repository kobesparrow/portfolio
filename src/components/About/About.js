import React from 'react';
import headshot from '../../images/mark-profile.jpeg';
import chevron from '../../images/chevron.svg';

const About = () => {
  
  return(
    <section className='about-section'>
      <h2>ABOUT</h2>
      <section className='about-details'>
        <img src={ headshot } className='headshot'/>
        <p className='about-text'>Given a lifetime of keyboards writing news articles, novels, and marketing copy, I found a place to combine my disparate professional experiences: writing code.
        <br />   
        <br />   
        As a fledgling software engineer I live for moments of discovery after long bouts of frustration. Creating intuitively designed, user-driven products has given me the ability to further explore personal interests filling previously unseen needs.</p>
      </section>
      <section className='about-columns'>
        <article className='about-tech-stack'>
          <h3>Tech Stack</h3>
          <hr />
          <dl>
            <dt>Javascript</dt>
            <dt>React</dt>
            <dd>Redux</dd>
            <dd>Router</dd>
            <dd>Express</dd>
            <dt>CSS</dt>
            <dd>Sass</dd>
            <dt>HTML</dt>
            <dt>Jest/Enzyme</dt>
            <dt>Mocha/Chai</dt>
            <dt>Git</dt>
            <dd>GitHub</dd>
            <dt>Weback/NPM</dt>
            <dt>Fetch/XHR</dt>
          </dl>  
        </article>
        {/* <article>
          <h3>Projects</h3>
          <hr />
          <article>
            <p>T</p>
          </article>  
        </article>  */}
        <article>
          <h3>Education</h3>
          <hr />
          <p className='header'>Turing School of Software and Design</p>
          <p className='subhead'>Front-end engineering, August 2019</p>
          <br />
          <p className='header'>Colorado State University</p>
          <p className='subhead'>BA in Journalism, 2007</p>
          <p className='subhead'>Concentration in news, editorial and technical communication</p>
        </article> 
        <article>
          <h3>Experience</h3>
          <hr />
          <p className='header'>Digital Media Manager</p>
          <p className='subhead'>University of Texas at Austin</p>
          <br />
          <p className='header'>SEO Marketing Manager</p>
          <p className='subhead'>First Online Solutions</p>
          <br />
        </article>  
      </section>
      <img src={ chevron } className='chevron' />
    </section>
  )
}

export default About;