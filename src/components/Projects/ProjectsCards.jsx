import React from 'react'

const ProjectsCards = (props) => {
    const {
        img,
        title,
        subtitle,
        text,
        link
    } = props;

  return (
    <div className='projects-cards'>
        <div className='card-head'>
            <div>
                <h1>{title}</h1>
                <i>{subtitle}</i>
            </div>

            <div>
                <p>{text}</p>
                    
                <div>
                    <a href={link} target='_blank' rel='noreferrer'>visit page</a>
                    <span href={link} target='_blank' rel='noreferrer'>detailed info</span>
                </div>
            </div>
        </div>
        <img src={img} alt="preview" />        
    </div>
  )
}

export default ProjectsCards