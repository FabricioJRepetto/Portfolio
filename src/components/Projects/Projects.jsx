import React, { useEffect, useState} from 'react'

import './Projects.css'
import ProjectsCards from './ProjectsCards';

const Projects = ({box}) => {
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setOpen(true)
      }, 10);
      setTimeout(() => {
        setMounted(true)
      }, 700);
    }, [])
    
    useEffect(() => {
        setOpen(false)
        setMounted(false)
    }, [box])
    
  return (
    <div className={`projects-container`}>        
        <div className={`box-projects ${box === 'p' && open && 'box-projects-open'}`}>
            <p className={`projects-title ${mounted && 'projects-title-on'}`}>Projects</p>
        </div>

        <div className={`p-cards-container ${box === 'p' && mounted && 'mounted'}`}>
            <ProjectsCards img={'https://res.cloudinary.com/dsyjj0sch/image/upload/v1665013564/portfolio-preview/provider_dqwgm4.gif'} title={'Provider store'} subtitle={'eCommerce'} text={'Team project. User acount creation and management. Database and API consumption.'} link={'https://providerstore.vercel.app'}/>

            <ProjectsCards img={'https://res.cloudinary.com/dsyjj0sch/image/upload/v1665013245/portfolio-preview/dog_house_favapn.gif'} title={'Dog House'} subtitle={'SPA'} text={'Database and multiple API comsumption. CRUD.'} link={'https://the-dog-house.vercel.app'}/>
        </div>        
    </div>
  )
}

export default Projects