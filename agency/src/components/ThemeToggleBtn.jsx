import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme,setTheme}) => {

    //after refresh, set theme based on local storage or system preference ()
    useEffect(() => {
    // 1. Check if user's OS/browser prefers dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 2. Set the theme state
    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'));
}, []) // 3. Empty dependency array - runs only once on mount

    //set or remove dark mode class based on theme
   useEffect(() => {
    // 1. Check if current theme is 'dark'
    if (theme === 'dark') {
        // 2. Add 'dark' class to the root HTML element
        document.documentElement.classList.add('dark') // <html class="dark">
    } else {
        // 3. Remove 'dark' class if theme is not 'dark' (light mode)
        document.documentElement.classList.remove('dark')
    }
    // 4. Save the current theme to localStorage
    localStorage.setItem('theme', theme)
}, [theme]) // 5. Dependency array - runs whenever 'theme' changes

  return (
    <>
        <button>
            {theme === 'dark' ? 
            (<img src={assets.sun_icon} alt="sun icon" className='size-8.5 p-1.5 border border-gray-500 rounded-full' onClick={()=>setTheme('light')}/>)
            :
            <img src={assets.moon_icon} alt="moon icon" className='size-8.5 p-1.5 border border-gray-500 rounded-full' onClick={()=>setTheme('dark')}/>
            }
        </button>
    </>
  )
}

export default ThemeToggleBtn