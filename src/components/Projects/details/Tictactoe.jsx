import React, { useState, useEffect, useRef } from 'react'
import { useLang } from '../../../lang-context'
import { backButtonInterceptor, interceptorRemover } from '../../utils/backButtonInterceptor'

import './details.css'

const Tictactoe = ({ close }) => {
    const scroll = useRef(null)
    let maxScroll = 0
    const [open, setOpen] = useState(true)
    const [scrolled, setScrolled] = useState(0)

    const { state: { lang } } = useLang();

    const scroller = () => {
        let ele = document.getElementById('scrollContainer');
        setScrolled(Math.abs(ele.scrollTop * 100) / maxScroll);
    }

    const closer = () => {
        setOpen(false)
        setTimeout(() => {
            close()
        }, 1000);
    }

    useEffect(() => {
        backButtonInterceptor(closer);
        let scrollContainer
        if (scroll) {
            scrollContainer = document.getElementById('scrollContainer')
            let aux = Math.abs(scrollContainer.scrollHeight - scrollContainer.clientHeight) + 110;
            // eslint-disable-next-line
            maxScroll = aux;
            scrollContainer.addEventListener('scroll', scroller)
        }

        return () => {
            scrollContainer.removeEventListener('scroll', scroller)
            interceptorRemover()
        }
        // eslint-disable-next-line
    }, [])


    return (
        <div className={`project-details-container ${!open && 'details-close'}`}>

            <div className='project-details-header'>
                <h1>TicTacToe Io</h1>
                <div>
                    <h2>{lang === 'En' ? 'Online mini game' : 'Mini juego online'}</h2>
                    <a className='link-button' href='https://tictactoeio.vercel.app' target='_blank' rel='noreferrer'>{lang === 'En' ? 'Visit web site' : 'Visitar página'}</a>
                </div>
            </div>

            <div className='details-text-container'>
                <div className='scroll-bar' style={{ top: `${scrolled}%` }}></div>
                <div className='p-details-content' id='scrollContainer' ref={scroll}>
                    <section>
                        <h2>{lang === 'En' ? 'What is Tictactoe Io?' : '¿Qué es Tictactoe Io?'}</h2>
                        {lang === 'En'
                            ? <p>
                                This project is ment to explore the posibilities given by full-duplex connections. Using WebSockets (Socket.Io), I developed an online mini game, TicTacToe, and a simple chat.
                            </p>
                            : <p>
                                La finalidad de este proyecto es explorar las posibilidades ofrecidas por la conección bidireccional. Utilizando WebSockets (Socket.Io), desarrollé un mini juego online, tres en linea, y un chat simple.
                            </p>}
                        <div className='p-details-img-container'>
                            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1668812932/portfolio-preview/ezgif-1-97ea9f8423_yppw9e.gif" alt="" />
                        </div>
                    </section>
                    <br />
                    <h2>{lang === 'En' ? 'Some features...' : 'Algunas características...'}</h2>
                    <br />
                    <section>
                        <h2>{lang === 'En' ? 'Online' : 'En linea'}</h2>
                        {lang === 'En'
                            ? <p>
                                You can play with a friend, just give them the room code or the url and have fun!
                            </p>
                            : <p>
                                Puede jugar con un amigo, simplemente pasale el codigo de la sala o la url y diviertanse!
                            </p>}
                        <div className='p-details-img-container'>
                            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1668812931/portfolio-preview/ezgif-1-ae6366084a_jphbfu.gif" alt="" />
                        </div>
                    </section>
                    <section>
                        <h2>{lang === 'En' ? 'Room chat' : 'Chat de sala'}</h2>
                        {lang === 'En'
                            ? <p>
                                There is a simple chat available while playing with another player, just in case you need it. Be friendly!
                            </p>
                            : <p>
                                Hay un chat disponible mientras se juega contra otro jugador, por si lo necesitas. Se amigable!
                            </p>}
                    </section>
                    <section>
                        <h2>{lang === 'En' ? 'Play against a bot' : 'Juega contra un bot'}</h2>
                        {lang === 'En'
                            ? <p>
                                If you just wanna test the app or don't have any friend available at the moment, there is a simple bot waiting to play with you.
                            </p>
                            : <p>
                                Si solo quieres probar la aplicación o no tienens ningun amigo disponible de momento, hay un bot simple esperandote para jugar contigo.
                            </p>}
                    </section>
                    <section>
                        <h2>{lang === 'En' ? 'Spectator mode' : 'Modo espectador'}</h2>
                        {lang === 'En'
                            ? <p>WIP</p>
                            : <p>En desarrollo.</p>}
                    </section>
                </div>
            </div>

        </div>
    )
}

export default Tictactoe