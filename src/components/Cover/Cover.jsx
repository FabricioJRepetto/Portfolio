import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Cover.css'

const Cover = () => {
    const [title, setTitle] = useState('')

    useEffect(() => {
        let name = 'fabricio repetto'
        let i = 0;

        setInterval(() => {
            setTitle(name.slice(0, i+1))
            i++;
        }, 70);
      // eslint-disable-next-line
    }, [])
    
  return (
    <div className='cover'>
        <div className='cover-title'>
            <h1>{title}</h1>
            <div className='title-cursor'></div>
        </div>
    </div>
  )
}

export default Cover