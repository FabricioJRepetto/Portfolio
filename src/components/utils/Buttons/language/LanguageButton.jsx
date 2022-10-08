import React from 'react'
import { useLang } from '../../../../lang-context';

import './LanguageButton.css'

const LanguageButton = () => {
    const { dispatch, state: { lang } } = useLang();
    
    const updateLang = () => { 
        dispatch({type: 'change'});
    }

  return (
    <div className='language-button-container' onClick={updateLang}>
        <div className={`first ${lang === 'Es' && 'second'}`}>En</div>
        <div className={`first`}>Es</div>
    </div>
  )
}

export default LanguageButton;