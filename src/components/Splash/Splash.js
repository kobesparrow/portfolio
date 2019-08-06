import React from 'react';
import chevron from '../../images/chevron.svg';

const Splash = () => {

  return(
    <section className='splash'>
      <section className='splash-image' id='splash-image-id'>
        <span className='splash-image-name' id='name-id'>
          <h1 id='name'>Mark R Collins</h1>
        </span>
      </section>
      <section className='splash-text'>
        Hi, my name is Mark. I create <strong>beautiful</strong> & <strong>functional</strong> web applications <br /> with people I enjoy for organizations I believe in.
      </section>
      <img src={ chevron } className='chevron' alt='down arrow'/>
    </section>
  )
}

export default Splash;