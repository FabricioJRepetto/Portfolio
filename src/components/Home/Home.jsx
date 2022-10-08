import React, { useState } from 'react'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'
import ThemeButton from '../utils/Buttons/theme/ThemeButton'
import HomeButton from '../utils/Buttons/home/HomeButton'
import LanguageButton from '../utils/Buttons/language/LanguageButton'
import { useLang } from '../../lang-context'

import '../../index.css'
import './Home.css'

const Home = () => {
    const [theme, setTheme] = useState('dark');
    const [section, setSection] = useState('h');
    const [box, setBox] = useState('h');
    const [menu, setMenu] = useState(true);

    const { state: { lang } } = useLang();

    const changeTheme = () => {
        let root = document.querySelector(':root');
        // los nombres corresponden a los colores opuestos
        const themes = {
            light: {
                p: '#F9F5EB',
                s: '#0d1218'
            },
            dark: {
                p: '#0d1218',
                s: '#F9F5EB'
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
        if (box === 'c') {
            setBox('aux')
            setTimeout(() => {
                setMenu(true)
                setSection('h')
                setBox('h')
            }, 1300);
        } else {
            setBox('h')
            setTimeout(() => {
                setMenu(true)
                setSection('h')
            }, 1000);
        }
      }    

  return (
    <div className={`home-container slide-in`}>

        <div className='fixed-bar'>
            <HomeButton section={box} goHome={backToHome}/>
            <ThemeButton theme={theme} change={changeTheme}/>
            <LanguageButton />
        </div>

        <div className={`home-side-box box-${box}-position`}>
            {(box === 'h' || box === 'a') && 
            <div className='home-side-box-text-container'>
                <h1>Fabricio Repetto</h1>
                {lang === 'En'
                    ?<p>Front end developer</p>
                    :<p>Desarrollador front end</p>}
            </div>}
        </div>
        
        <div className='home-menu'>
            <div onClick={()=>transition('p')} 
                className={`${!menu && 'menu-gone-style'}`}>
                {lang === 'En'
                    ?<p>Projects</p>
                    :<p>Proyectos</p>}
            </div>
            <div onClick={()=>transition('a')} 
                className={`${!menu && 'menu-gone-style'}`}>
                {lang === 'En'
                    ?<p>About</p>
                    :<p>Sobre mi</p>}
            </div>
           <div onClick={()=>transition('c')} 
                className={`${!menu && 'menu-gone-style'}`}>
                {lang === 'En'
                    ?<p>Contact</p>
                    :<p>Contacto</p>}
            </div>
        </div>

        {(section === 'p' || box === 'p') && <Projects box={box}/>}
        {(section === 'a' || box === 'a') && <About box={box}/>}
        {(section === 'c' || box === 'c') && <Contact box={box}/>}

    </div>
  )
}

export default Home