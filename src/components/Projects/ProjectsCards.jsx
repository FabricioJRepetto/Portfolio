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
                <a href={link} target='_blank' rel='noreferrer'>visit deploy</a>
            </div>
        </div>
        <img src={img} alt="preview" />        
    </div>
  )
}

export default ProjectsCards