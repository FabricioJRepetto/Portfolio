import React, { useState, useEffect } from 'react'

import './Contact.css'

const Contact = ({box}) => {
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setOpen(true)
      }, 10);
      setTimeout(() => {
        setMounted(true)
      }, 1000);
    }, [])
    
    useEffect(() => {
        if (box !== 'c') {
            setMounted(false)
            setTimeout(() => {
                setOpen(false)            
            }, 300);
        }
    }, [box])

    return (
        <div className='projects-container'>
            {/* <h1>Contact</h1>
            <p>LinkedIn</p>
            <p>GitHub</p>
            <p>eMail</p> */}

            <div className={`box-contact-container ${open && 'box-contact-container-open'}`}>
                <div className={`box-contact-inner ${mounted && 'cursor'}`}></div>
                {mounted && <p>Say Hello!</p>}
            </div>
        </div>
    )
}

export default Contact