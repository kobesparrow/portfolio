import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import Splash from '../Splash/Splash';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import SmoothScroll from '../SmoothScroll/SmoothScroll'


function App() {

  let date = new Date()
  const year = (date.getFullYear())

  return (
    <section className="App" id='home'>
      <header>
        <SmoothScroll />
        <SocialIcons />
      </header>
      <Splash />
      <About />
      <Projects />
      <Contact />
      <footer>
        <section className='copyright-section'>
          <p>Copyright © {year} Mark Collins</p>
        </section>
      </footer>
    </section>
  );
}

export default App;
