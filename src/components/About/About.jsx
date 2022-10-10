import React, { useEffect, useState, useRef } from 'react';
import { useLang } from '../../lang-context';

import './About.css'

const About = ({box}) => {
    const { state: { lang } } = useLang();
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(0);
    const slider = useRef(null);
    const [scrolled, setScrolled] = useState(0)
    const scrollAbout = useRef(null)
    let maxScroll = 0    

    const SKILLS = [
        'JavaScript',
        'React',
        'Redux',
        'Node.js',
        'Express',
        'MongoDB',
        'Sequelize',
        'Mongoose',
        'PostgreSQL',
        'HTML',
        'CSS',
        'GIT',
        'Scrum',
        'Potoshop',
        'Illustrator',
    ];

    const scroller = () => {
        let ele = document.getElementById('scrollAboutContainer');
        setScrolled(Math.abs(ele.scrollTop * 100) / maxScroll);        
     }

    useEffect(() => {
        let scrollContainer
        if (scrollAbout) {            
            scrollContainer = document.getElementById('scrollAboutContainer')
            let aux = Math.abs(scrollContainer.scrollHeight - scrollContainer.clientHeight) + 110;
            // eslint-disable-next-line
            maxScroll = aux;
            scrollContainer.addEventListener('scroll', scroller)
        }

        return () => scrollContainer.removeEventListener('scroll', scroller)        
        // eslint-disable-next-line
    }, [])

    const sliderInterval = () => {
        if (!slider.current) {
            slider.current = setInterval(() => {
                next();
            }, 3000);
        }
    };

    let aux = 0;
    const next = () => {
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
                
            <div className='about-text-container'>
                {mounted && <div className='about-scroll-bar' style={{top: `${scrolled * 2}%`}}></div>}
                <div className={`about-content ${mounted && 'about-content-visible'}`}  
                    ref={scrollAbout} id='scrollAboutContainer'>
                    {lang === 'En' 
                        ?<p className={`about-text`}>
                            I am a self-taught who found a new passion in programming, I am forming as a Front end developer (with knowledge on back end too) focused on JavaScript technologies since 2021.<br/>
                            Currently looking for my first work experience in the IT world.<br/><br/>
                            I am still studying (you never stop learning) and developing applications mainly with Eeact. 
                            I love to investigate and learn how to take advantages of new tools.<br/>
                            I am constantly looking for new ideas, opportunities and experiences to improve myself as a developer.<br/><br/>
                            I am also a photographer, discipline that strengthened my critical eye when designing web interfaces.
                        </p>
                        :<p className={`about-text`}>
                            Soy autodidacta que encontró una nueva pasión en la programación, desde el 2021 estoy formandome como desarrollador front end (con conocimientos en back end) orientado a tecnologías Javascript.<br/>
                            Actualmente estoy buscando mi primer experiencia laboral en el mundo IT.<br/><br/>
                            Continúo estudiando (nunca paras de aprender) y desarrollando aplicaciones principalmente en React.
                            Me encanta investigar y aprender como aprovechar nuevas herramientas.<br/>
                            Estoy constantemente buscando nuevas ideas, oportunidades y experiencias para mejorar como programador.<br/><br/>
                            También soy fotógrafo, diciplina que fortaleció mi mirada crítica a la hora de diseñár interfaces para web. 
                        </p>}
                    <div className='skills-container'>
                        {SKILLS.map(s => (
                            <div className='skill-card'>{s}</div>
                        ))}
                    </div>
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