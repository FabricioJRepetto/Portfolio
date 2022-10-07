import React from 'react'

const ProjectsCards = ({data, setDetails}) => {
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
                <h1>{title}</h1>
                <i>{subtitle}</i>
            </div>

            <div>
                <p>{text}</p>
                    
                <div>
                    <a className='link-button' href={link} target='_blank' rel='noreferrer'>visit web site</a>
                    <span className='link-button' onClick={()=>setDetails(title)}>detailed info</span>
                </div>
            </div>
        </div>
        <div className='p-card-img-container'>
            <img src={img} alt="preview" />
            <div className={`p-card-filler filler${index}`}></div>
        </div>            
    </div>
  )
}

export default ProjectsCards