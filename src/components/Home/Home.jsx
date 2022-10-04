import React, { useState, useEffect } from 'react'
import './Home.css'
import '../../index.css'

const Home = ({unmount, setSection }) => {
    // const [mount, setMount] = useState(true);

    // useEffect(() => {
    //   setTimeout(() => {
    //     setMount(true)
    //   }, 500);
    // }, [])    

  return (
    <div className={`home-container ${unmount ? 'slide-out' : 'slide-in'}`}>
        <div className='home-side-box'>
            <h1>Fabricio Repetto</h1>
            <p>Full stack developer</p>
        </div>
        
        <div className='home-menu'>
            <div onClick={()=>setSection('projects')}>
                <p>Projects</p>
            </div>
            <div onClick={()=>setSection('about')}>
                <p>About</p>
            </div>
            <div onClick={()=>setSection('contact')}>
                <p>Contact</p>
            </div>
        </div>
    </div>
  )
}

export default Home