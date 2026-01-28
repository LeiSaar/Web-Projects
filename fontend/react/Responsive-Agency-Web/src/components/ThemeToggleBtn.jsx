import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {
   
    useEffect (()=>{
       const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
       setTheme(theme || (prefersDarkMode? 'dark' : 'light'));
    }, [])

    useEffect (()=>{
          document.documentElement.classList.toggle('dark', theme === 'dark');
          localStorage.setItem('theme', theme);
    }, [theme])

  return (
    <>
        <button>
            {theme === 'dark'?(
                <img className='size-8.5 p-1.5 border-gray-500 rounded-full' src={assets.sun_icon} alt="" 
                onClick={()=> setTheme('light')}/>
            ):(
                <img className='size-8.5 p-1.5 border-gray-500 rounded-full' src={assets.moon_icon} alt=""
                onClick={()=> setTheme('dark')} />
            )}
        </button>
    </>
  )
}

export default ThemeToggleBtn