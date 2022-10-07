import React, { useState } from 'react'

import './LanguageButton.css'

const LanguageButton = ({language, change}) => {
    const [lang, setLang] = useState(language)
    
    const updateLang = () => { 
        change();
        lang === 'Es' ? setLang('En') : setLang('Es');
     }

  return (
    <div className='language-button-container' onClick={updateLang}>
        <div className={`first ${lang === 'Es' && 'second'}`}>Es</div>
        <div className={`first`}>En</div>
    </div>
  )
}

export default LanguageButton