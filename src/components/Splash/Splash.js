import React from 'react';
import chevron from '../../images/chevron.svg';

const Splash = () => {

  return(
    <section className='splash'>
      <section className='splash-image'>
        <span className='splash-image-name'>
          <h1>Mark</h1>
          <h1>Collins</h1>
        </span>
      </section>
      <section className='splash-text'>
        Hi, my name is Mark. I create <strong>beautiful</strong> & <strong>functional</strong> web applications with people I enjoy for organizations I believe in.
      </section>
      <img src={ chevron } className='chevron' />
    </section>
  )
}

export default Splash;