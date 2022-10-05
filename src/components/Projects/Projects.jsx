import React, { useEffect, useState} from 'react'

import './Projects.css'

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
            <p>Projects</p>
        </div>

        <div className={`p-cards-container ${box === 'p' && mounted && 'mounted'}`}>
            <div className="p-card">provider</div>
            <div className="p-card">dog house</div>
        </div>        
    </div>
  )
}

export default Projects