import React, { useState, useEffect, useRef } from 'react'
import { useLang } from '../../../lang-context'
import { backButtonInterceptor, interceptorRemover } from '../../utils/backButtonInterceptor'

import './details.css'

const DietMate = ({ close }) => {
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
                <h1>Diet Mate</h1>
                <div>
                    <h2>{lang === 'En' ? 'Organizer app' : 'App organizadora'}</h2>
                    <a className='link-button' href='https://weekly-diet.vercel.app' target='_blank' rel='noreferrer'>{lang === 'En' ? 'Visit web site' : 'Visitar página'}</a>
                </div>
            </div>

            <div className='details-text-container'>
                <div className='scroll-bar' style={{ top: `${scrolled}%` }}></div>
                <div className='p-details-content' id='scrollContainer' ref={scroll}>
                    <section>
                        <h2>{lang === 'En' ? 'What is Diet Mate?' : '¿Qué es Diet Mate?'}</h2>
                        {lang === 'En'
                            ? <p>
                                This project comes up from a personal need: to organize my meals according to a specific diet. I developed this app, which generates recommendations to balance your daily meals based on the advice of a nutritionist.<br />
                                The overall design is intended for use on smart phones, so some touch gestures are used in the desktop version as well since they are intuitive and agile.
                            </p>
                            : <p>
                                Este proyecto surge de una necesidad personal: organizar mis comidas en base a una dieta especifica. Desarrollé esta app, que genera recomendaciones para balancear tus comidas diarias a partir de los consejos de una nutricionista.<br />
                                El diseño general está pensado para su uso en smart phones, por lo que se utilizan algunos gestos táctiles en la versión de escritorio también ya que resultan intuitivos y ágiles.
                            </p>}
                        <div className='p-details-img-container'>
                            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1674140627/portfolio-preview/meal_creation_zfgzmv.gif" alt="" />
                        </div>
                    </section>
                    <br />
                    <h2>{lang === 'En' ? 'Some features...' : 'Algunas características...'}</h2>
                    <br />
                    <section>
                        <h2>{lang === 'En' ? 'Users acounts' : 'Cuentas de usuario'}</h2>
                        {lang === 'En'
                            ? <p>
                                Due to the nature of the application, a user system was necessary.<br />
                                I have implemented the login with Google's method because it has an easy implementation in the project, and it is quick to use for the users, with no need for passwords or confirmation emails.
                            </p>
                            : <p>
                                Debido a la naturaleza de la aplicación, era necesario un sistema de usuarios.<br />He implementado el inicio de sesión con el método de Google porque tiene una fácil implementación en el proyecto, y es de uso rápido para los usuarios, sin necesidad de contraseñas ni correos electrónicos de confirmación.
                            </p>}
                        <div className='p-details-img-container'>
                            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1674140628/portfolio-preview/history_xn62cg.gif" alt="" />
                        </div>
                    </section>
                    <section>
                        <h2>{lang === 'En' ? 'Recommendations' : 'Recomendaciones'}</h2>
                        {lang === 'En'
                            ? <p>
                                When the user starts logging meals, the application will give daily recommendations to balance their diet.
                            </p>
                            : <p>
                                Cuando el usuario comienza a registrar comidas, la aplicación le dará recomendaciones diariamente, para balancear su dieta.
                            </p>}
                        <div className='p-details-img-container'>
                            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1674140627/portfolio-preview/workout_card_gmpwqy.gif" alt="" />
                        </div>
                    </section>
                    <section>
                        <h2>{lang === 'En' ? 'History to PDF' : 'Historial a PDF'}</h2>
                        {lang === 'En'
                            ? <p>
                                It is possible to select one or multiple weeks and generate a PDF file with the information for those dates.
                            </p>
                            : <p>
                                Es posible seleccionar una o multiples semanas y generar un archivo PDF con la información de esas fechas.
                            </p>}
                    </section>
                    <section>
                        <h2>{lang === 'En' ? 'Statistics' : 'Estadísticas'}</h2>
                        {lang === 'En'
                            ? <p>
                                Another type of register is the "Checkpoint", where the user stores information about their weight, muscle mass, body fat and more.<br />
                                This data is based on the results of a bioimpedance study.<br /><br />
                                These registers are collected and displayed in charts so the user's progress can be easily viewed.
                            </p>
                            : <p>
                                Otro tipo de registro son los "Controles", donde el usuario guarda información sobre su peso, masa muscular, grasa corporal y más.<br />
                                Estos datos se basan en los resultados de un estudio de bioimpedancia.<br /><br />
                                Estos registros se recopilan y se muestran en gráficos para poder ver facilmente el progreso del usuario.
                            </p>}
                        <div className='p-details-img-container'>
                            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1674140628/portfolio-preview/checkpoints_vneand.gif" alt="" />
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default DietMate