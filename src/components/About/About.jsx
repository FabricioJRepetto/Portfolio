import React, { useEffect, useState } from 'react';

import './About.css'

const About = ({box}) => {
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
        setMounted(false)
        setOpen(false)
    }, [box])

  return (
    <div className={`projects-container`}>
        <div className={`box-about`}>
            {<p className={`about-text ${(box === 'a' && mounted) && 'about-text-visible'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet sunt expedita ipsa aliquam sequi, maiores facilis vero quasi possimus ut culpa nesciunt repellat itaque dicta ipsam voluptates corporis natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet sunt expedita ipsa aliquam sequi, maiores facilis vero quasi possimus ut culpa nesciunt repellat itaque dicta ipsam voluptates corporis natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet sunt expedita ipsa aliquam sequi, maiores facilis vero quasi possimus ut culpa nesciunt repellat itaque dicta ipsam voluptates corporis natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet sunt expedita ipsa aliquam sequi, maiores facilis vero quasi possimus ut culpa nesciunt repellat itaque dicta ipsam voluptates corporis natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet sunt expedita ipsa aliquam sequi, maiores facilis vero quasi possimus ut culpa nesciunt repellat itaque dicta ipsam voluptates corporis natus.</p>}
        </div>
    </div>
  )
}

export default About