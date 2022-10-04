import { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cover from './components/Cover/Cover';

import './App.css';

function App() {
    const [theme, setTheme] = useState('dark');
    const [section, setSection] = useState(false);
    const [unmount, setUnmount] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSection('home')
        }, 2000);
    }, [])

    const transitioner = (section) => {
        setUnmount(true)
        setTimeout(() => {
            setSection(section)
            setUnmount(false)
        }, 1000);
    }

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

    return (
        <div className="App">
            <div className='fixed-bar'>
                <button onClick={changeTheme}>@</button>
                <button onClick={() => setSection('home')}>#</button>
            </div>
            <div className='spontlight'></div>
            <div className='grain'></div>
            {!section && <Cover />}
            {section === 'home' && <Home setSection={transitioner} unmount={unmount} />}
            {section === 'projects' && <Projects />}
            {section === 'about' && <About />}
            {section === 'contact' && <Contact />}
        </div>
    );
}

export default App;