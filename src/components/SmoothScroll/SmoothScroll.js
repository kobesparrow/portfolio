import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SmoothScroll = () => (
  <section className="header-links">
    <ul>
      <li><AnchorLink href='#home'>HOME</AnchorLink></li>
      <li><AnchorLink offset='30' href='#about'>ABOUT</AnchorLink></li>
      <li><AnchorLink offset='30' href='#projects'>PROJECTS</AnchorLink></li>
      <li><AnchorLink offset='30' href='#contact'>CONTACT</AnchorLink></li>
    </ul>
  </section>
)

export default SmoothScroll;