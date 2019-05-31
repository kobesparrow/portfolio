import React from 'react';
import instagram from '../../images/instagram.svg';
import gitHub from '../../images/github.svg';
import linkedIn from '../../images/linkedin.svg';

const SocialIcons = () => {
  
  return(
    <section className='social-section'>
      <button onClick={() => window.open("https://www.github.com/kobesparrow", "_blank")}>
        <img
          className='social-icon'
          src={gitHub}
          onMouseOver={e => (e.currentTarget.src = 'static/media/github-hover.e4f2d6b0.svg')}
          onMouseOut={e => (e.currentTarget.src = 'static/media/github.03ef488d.svg')}
        />
      </button>
      <button onClick={() => window.open("https://www.linkedin.com/in/mark-r-collins", "_blank")}>
        <img
          className='social-icon'
          src={linkedIn}
          onMouseOver={e => (e.currentTarget.src = 'static/media/linkedin-hover.4b475fb3.svg')}
          onMouseOut={e => (e.currentTarget.src = 'static/media/linkedin.f5409d56.svg')}
        />
      </button>
      <button onClick={() => window.open("https://www.instagram.com/olivejameson/", "_blank")}>
        <img
          className='social-icon'
          src={instagram}
          onMouseOver={e => (e.currentTarget.src = 'static/media/instagram-hover.b1c58ee1.svg')}
          onMouseOut={e => (e.currentTarget.src = 'static/media/instagram.bb026c4d.svg')}
        />
      </button>
    </section>
  )
}

export default SocialIcons;