import React, { useEffect, useState } from 'react';

import './About.css'

const About = ({box}) => {
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setMounted(true)
        }, 1000);
    }, [])
    
    useEffect(() => {
        setMounted(false)
    }, [box])

  return (
    <div className={`projects-container`}>
        <div className={`box-about`}>
            {<p className={`about-text ${mounted && 'about-text-visible'}`}>
                I am a self-taught Full Stack Programmer
                focused on JavaScript technologies.<br/>
                Looking for my first work experience in the IT world.<br/><br/>
                I am still studying (you never stop learning) and developing applications mainly with react. 
                I love to investigate and learn how to take advantages of new tools.<br/>
                I am constantly looking for new ideas, opportunities, and experiences to improve myself as a developer.<br/><br/>
                I am also a photographer, discipline that strengthened my critical eye when designing web interfaces.
            </p>}

            

            {mounted && <div className='about-img-container'>
                <div className='about-images'>
                    <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1664731758/logos/react_logo_icon_144942_s39yak.png" 
                    alt="React" className={`${show === 0 && 'about-img-visible'}`}/>
                    <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1664731758/logos/redux_icon_132038_oxunha.png" alt="Redux" className={`${show === 1 && 'about-img-visible'}`}/>
                    <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1664732208/logos/nodejs-logo_txb8hq.png" alt="node.js" className={`${show === 2 && 'about-img-visible'}`}/>
                    <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1664731759/logos/express_original_logo_icon_146527_wr3iov.png" alt="express" className={`${show === 3 && 'about-img-visible'}`}/>
                    <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1664732027/logos/mongo_db_logo_diovkg.png" alt="MongoDB" className={`${show === 4 && 'about-img-visible'}`}/>
                    <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665008173/logos/dbs-postgresql_icon-icons.com_50907_ntbipk.png" alt="PostgreSQL" className={`${show === 5 && 'about-img-visible'}`}/>
                    <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665008173/logos/adb-photoshop_icon-icons.com_50960_ln8civ.png" alt="Photoshop" className={`${show === 6 && 'about-img-visible'}`}/>
                    <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665008173/logos/adb-illustrator_icon-icons.com_50964_wsxwi0.png" alt="Illustrator" className={`${show === 7 && 'about-img-visible'}`}/>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default About