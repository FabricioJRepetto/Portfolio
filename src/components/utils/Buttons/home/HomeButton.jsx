import React from 'react'

import './HomeButton.css'

const HomeButton = ({section, goHome}) => {
  return (
    <div className={`home-button-container ${(section === 'h' || section === 'aux') && 'button-off'}`} onClick={goHome}>        
        <div className={`home `}></div>        
    </div>
  )
}

export default HomeButton