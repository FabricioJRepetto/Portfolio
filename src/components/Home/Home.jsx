import React, { useState, useEffect, createContext } from 'react'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'

import '../../index.css'
import './Home.css'

const Home = () => {
    const [theme, setTheme] = useState('dark');
    const [section, setSection] = useState('h');
    const [box, setBox] = useState('h');
    const [menu, setMenu] = useState(true);

    const changeTheme = () => {
        let root = document.querySelector(':root');
        // los nombres corresponden a los colores opuestos
        const themes = {
            light: {
                p: '#F9F5EB',
                s: '#0d1218',
                o: .3
            },
            dark: {
                p: '#0d1218',
                s: '#F9F5EB',
                o: .15,
            }
        }

        root.style.setProperty('--primary', themes[theme].p);
        root.style.setProperty('--secondary', themes[theme].s);
        root.style.setProperty('--o', themes[theme].o);

        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    const transition = (param) => {
        setMenu(false)
        setBox(param)
        setTimeout(() => {
            setSection(param)
        }, 1000);
     }

     const backToHome = () => { 
        setBox('h')
        setTimeout(() => {
            setMenu(true)
            setSection('h')
        }, 1000);
      }

  return (
    <div className={`home-container slide-in`}>
        <div className='fixed-bar'>
            <button onClick={changeTheme}>@</button>
            <button onClick={backToHome}>#</button>
        </div>
        <div className={`home-side-box box-${box}-position`}>
            {(box === 'h' || box === 'a') && 
            <div className='home-side-box-text-container'>
                <h1>Fabricio Repetto</h1>
                <p>Full stack developer</p>
            </div>}
        </div>
        
        <div className='home-menu'>
            <div onClick={()=>transition('p')} className={`${!menu && 'menu-gone-style'}`}>
                <p>Projects</p>
            </div>
            <div onClick={()=>transition('a')} className={`${!menu && 'menu-gone-style'}`}>
                <p>About</p>
            </div>
            <div onClick={()=>transition('c')} className={`${!menu && 'menu-gone-style'}`}>
                <p>Contact</p>
            </div>
        </div>

        {(section === 'p' || box === 'p') && <Projects box={box}/>}
        {(section === 'a' || box === 'a') && <About box={box}/>}
        {(section === 'c' || box === 'c') && <Contact box={box}/>}

    </div>
  )
}

export default Home