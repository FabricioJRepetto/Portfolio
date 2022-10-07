import React, { useEffect, useState} from 'react'
import ProjectsCards from './ProjectsCards';
import Provider from './details/Provider';
import Dogs from './details/Dogs';

import './Projects.css'

const Projects = ({box}) => {
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(false)

    const PROJECTS = [
        {   
            title: 'Provider store',
            subtitle: 'eCommerce',
            text: 'Team project. User acount creation and management. Database and API consumption.',
            link: 'https://providerstore.vercel.app',
            img: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1665013564/portfolio-preview/provider_dqwgm4.gif',
            index: 0
        },
        {   
            title: 'Dog House',
            subtitle: 'SPA',
            text: 'Database and multiple API comsumption. CRUD.',
            link: 'https://the-dog-house.vercel.app',
            img: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1665013245/portfolio-preview/dog_house_favapn.gif',
            index: 1
        }
    ]

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
            {PROJECTS.map((p) => (
                <ProjectsCards key={p.title} data={p} setDetails={setDetails}/>
            ))}            
        </div>

        {mounted && <div className="projects-thread"></div>}
        {details === 'Provider store' && <Provider close={()=>setDetails(false)}/>}
        {details === 'Dog House' && <Dogs close={()=>setDetails(false)}/>}
    </div>
  )
}

export default Projects