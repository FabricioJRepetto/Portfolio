import { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import Cover from './components/Cover/Cover';

import './App.css';

function App() {
    const [landing, setLanding] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLanding(false)
        }, 5000);
    }, [])

    return (
        <div className="App">
            <div className='spotlight'></div>
            <div className='grain'></div>
            {landing && <Cover />}
            {!landing && <Home />}
        </div>
    );
}

export default App;