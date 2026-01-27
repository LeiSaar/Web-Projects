import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <Navbar theme = {theme} setTheme = {setTheme} />
    </div>
  )
}

export default App;
