import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuButton from '../../images/menu.svg'

const SmoothScroll = () => {

  return (
    <section className='header-links'>
      <div className='menu-button' id='menu-button-id'>
        <img src={menuButton} className='hamburger-icon' />
      </div>
      <ul className='links-list'>
        <li><AnchorLink href='#home'>HOME</AnchorLink></li>
        <li><AnchorLink offset='30' href='#about'>ABOUT</AnchorLink></li>
        <li><AnchorLink offset='30' href='#projects'>PROJECTS</AnchorLink></li>
        <li><AnchorLink offset='30' href='#contact'>CONTACT</AnchorLink></li>
      </ul>
    </section>
  )  
}

export default SmoothScroll;