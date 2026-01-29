import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx';
import TrustedBy from './components/TrustedBy.jsx';
import Services from './components/Services.jsx';
import OurWork from './components/OurWork.jsx';
import Teams from './components/Teams.jsx';

const App = () => {
  const [theme, setTheme] = useState(()=>{
    const savedTheme = localStorage.getItem('theme');
    return savedTheme? savedTheme: 'light';
  });

  return (
    <div className = "dark:bg-black realtive">
      <Navbar theme = {theme} setTheme = {setTheme} />
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
    </div>
  )
}

export default App;
