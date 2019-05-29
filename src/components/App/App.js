import React from 'react';
import Splash from '../Splash/Splash';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="header-links">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>WORK</li>
            <li>RESUME</li>
            <li>CONTACT</li>
          </ul>
        </section>
        <section className="social-links">
          <p>social buttons</p>
        </section>
      </header>
      <Splash />
    </div>
  );
}

export default App;
