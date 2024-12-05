import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeToggler = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div>
        <p>
            Current Theme : {theme}
        </p>
        <button onClick={toggleTheme}>
            Swith to {theme==='light'?'dark':'light'} mode

        </button>


    </div>
  )
}

export default ThemeToggler