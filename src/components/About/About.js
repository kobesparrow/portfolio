import React from 'react';

const About = () => {
  
  return(
    <section className='about-section'>
      <h2>ABOUT</h2>
      <section className='about-details'>
        <p>Given a lifetime of keyboards writing news articles, novels, and marketing copy, I found a place to combine my disparate professional experiences: writing code.
        <br />   
        As a fledgling software engineer I live for moments of discovery after long bouts of frustration. Creating intuitively designed, user-driven products has given me the ability to further explore personal interests filling previously unseen needs.</p>
      </section>
      <section className='about-columns'>
        <article>
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
        <article>
          <h3>Projects</h3>
          <hr />
          <article>
            <p>T</p>

          </article>  
        </article> 
        <article>
          <h3>Education</h3>
          <hr />
          <p>Turing School of Software and Design</p>
          <p>Front-end engineering, August 2019</p>
          <br />
          <p>Colorado State University</p>
          <p>BA in Journalism, 2007</p>
          <p>Concentration in news, editorial and technical communication</p>
        </article> 
        <article>
          <h3>Experience</h3>
          <hr />
          <p>Digital Media Manager</p>
          <p>University of Texas at Austin</p>
          <br />
          <p>SEO Marketing Manager</p>
          <p>First Online Solutions</p>
          <br />
        </article>  
      </section>
    </section>
  )
}

export default About;