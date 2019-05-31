import React from 'react';
import Splash from '../Splash/Splash';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function App() {

  let d = new Date()
  const year = (d.getFullYear())

  return (
    <section className="App">
      <header>
        <section className="header-links">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>WORK</li>
            <li>RESUME</li>
            <li>CONTACT</li>
          </ul>
        </section>
        {/* <section className="social-links">
          <p>social buttons</p>
        </section> */}
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
