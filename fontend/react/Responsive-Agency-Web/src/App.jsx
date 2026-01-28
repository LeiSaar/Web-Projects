import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'

const App = () => {
  const [theme, setTheme] = useState(()=>{
    const savedTheme = localStorage.getItem('theme');
    return savedTheme? savedTheme: 'light';
  });

  return (
    <div>
      <Navbar theme = {theme} setTheme = {setTheme} />
    </div>
  )
}

export default App;
