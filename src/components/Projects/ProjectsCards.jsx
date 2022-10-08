import React from 'react'

import './Projects.css'

const ProjectsCards = ({data, setDetails, lang}) => {
    const {
        img,
        title,
        subtitle,
        text,
        link,
        index
    } = data;

  return (
    <div className='projects-cards'>
        <div className='card-head'>
            <div>
                <h1 onClick={()=>setDetails(title)}>{title}</h1>
                <i>{subtitle}</i>
            </div>

            <div>
                <p>{text}</p>
                    
                <div>
                    <a className='link-button' href={link} target='_blank' rel='noreferrer'>{lang === 'En' ? 'Visit website' : 'Visitar página'}</a>
                    <span className='link-button' onClick={()=>setDetails(title)}>{lang === 'En' ? 'Details' : 'Detalles'}</span>
                </div>
            </div>
        </div>
        <div className='p-card-img-container' onClick={()=>setDetails(title)}>
            <img src={img} alt="preview" />
            <div className={`p-card-filler filler${index}`}></div>
        </div>            
    </div>
  )
}

export default ProjectsCards