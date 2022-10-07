import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

import './About.css'
const About = ({box}) => {
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(0);
    const slider = useRef(null);

    const SKILLS = [
        'JavaScript',
        'React',
        'Redux',
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        'PostgreSQL',
        'Sequelize',
        'HTML',
        'CSS',
        'GIT',
        'Scrum',
        'Potoshop',
        'Illustrator',
    ]

    const sliderInterval = () => { 
        if (!slider.current) {
            slider.current = setInterval(() => {
                next();            
            }, 3000);            
        }
     };

    let aux = 0;
    const next = () => {
        console.log('show ', show);
        if (aux === 8) {
            setShow(0)
            aux = 0
        } else {
            setShow(aux + 1)
            aux++
        }
    }

     const stopSlideTimer = () => {
        if (slider.current) {
            clearInterval(slider.current);
            slider.current = null;
        }
    };

    useEffect(() => {
        sliderInterval();
        setTimeout(() => {
            setMounted(true)
        }, 1000);

        return () => stopSlideTimer();
        // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        setMounted(false)
    }, [box])

  return (
    <div className={`projects-container`}>
        <div className={`box-about`}>

            <div className={`about-content ${mounted && 'about-content-visible'}`}>
                <p className={`about-text`}>
                    I am a self-taught Full Stack Programmer
                    focused on JavaScript technologies.<br/>
                    Looking for my first work experience in the IT world.<br/><br/>
                    I am still studying (you never stop learning) and developing applications mainly with react. 
                    I love to investigate and learn how to take advantages of new tools.<br/>
                    I am constantly looking for new ideas, opportunities, and experiences to improve myself as a developer.<br/><br/>
                    I am also a photographer, discipline that strengthened my critical eye when designing web interfaces.
                </p>
                <div className='skills-container'>
                    {SKILLS.map(s => (
                        <div className='skill-card'>{s}</div>
                    ))}
                </div>
            </div>

            {mounted && <div className='about-img-container'>
                <div className='about-images'>
                    <div className={`logo-0 ${show === 0 && 'about-img-visible'}`}></div>
                    <div className={`logo-1 ${show === 1 && 'about-img-visible'}`}></div>
                    <div className={`logo-2 ${show === 2 && 'about-img-visible'}`}></div>
                    <div className={`logo-3 ${show === 3 && 'about-img-visible'}`}></div>
                    <div className={`logo-4 ${show === 4 && 'about-img-visible'}`}></div>
                    <div className={`logo-5 ${show === 5 && 'about-img-visible'}`}></div>
                    <div className={`logo-6 ${show === 6 && 'about-img-visible'}`}></div>
                    <div className={`logo-7 ${show === 7 && 'about-img-visible'}`}></div>
                    <div className={`logo-8 ${show === 8 && 'about-img-visible'}`}></div>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default About