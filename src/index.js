import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Unmount = createContext(false);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Unmount.Provider value={false}>
            <App />
        </Unmount.Provider>
    </React.StrictMode>
);