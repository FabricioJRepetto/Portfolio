import React from 'react'

import './ThemeButton.css'

const ThemeButton = ({theme, change }) => {

  return (
    <div className='theme-button-container' onClick={change}>        
        <div className={`moon ${theme !== 'light' && 'moon-off'}`}></div>
        <div className={`circle ${theme !== 'light' && 'circle-off'}`}></div>

        <div className={`sun ${theme === 'light' && 'sun-off'}`}>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default ThemeButton