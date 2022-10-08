import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useLang } from '../../../lang-context'
import { backButtonInterceptor, interceptorRemover } from '../../utils/backButtonInterceptor'

import './details.css'

const Dogs = ({close}) => {
    const scroll = useRef(null)
    let maxScroll = 0
    const [scrolled, setScrolled] = useState(0)
    const [open, setOpen] = useState(true)

    const { state: { lang } } = useLang();

    const scroller = () => {
        let ele = document.getElementById('scrollContainer');
        setScrolled(Math.abs(ele.scrollTop * 100) / maxScroll);        
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
            scrollContainer.removeEventListener('scroll', scroller);
            interceptorRemover();
        }
        // eslint-disable-next-line
    }, [])

    const closer = () => {
        setOpen(false)
        setTimeout(() => {
            close()
        }, 1000);
     }

  return (   
    <div className={`project-details-container ${!open && 'details-close'}`}>

        <div className='project-details-header'>
            <h1>Dog House</h1>
            <div>
                <h2>SPA</h2>
                <a className='link-button' href='https://the-dog-house.vercel.app' target='_blank' rel='noreferrer'>{lang === 'En' ? 'visit web site' : 'visitar página'}</a>
            </div>
        </div>

        <div className='details-text-container'>
            <div className='scroll-bar' style={{top: `${scrolled}%`}}></div>
            <div className='p-details-content' id='scrollContainer' ref={scroll}>
                <section>
                    <h2>{lang === 'En' ? 'What is Dog House?' : '¿Qué es Dog House?'}</h2>
                    {lang === 'En' 
                    ? <p>
                        This is a single page application that makes use of APIs (the dog API and Wikimedia API) to show information about different dog breeds, it can be filtered by multiple options simultaneously.<br/> Users can create their own dogs in the platform (it's stored on a Postgres database) and also see other users dogs too.
                    </p>
                    :<p>
                        Esta es una aplicación de una sola página (SPA) que utiliza APIs (the Dog API y Wikimedia API) para mostrar información sobre distintas razas de perros, esta se puede filtrar mediante varias opciones simultaneamente.<br/> Los usuarios pueden crear sus propios perros en la plataforma (estos se almacenan en una base de datos de Postgres) y también ver los de otros usuarios.
                    </p>}
                    <div className='p-details-img-container'>
                        <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665171351/portfolio-preview/Screenshot_2022-10-07_163520_ohj04q.png" alt="" />
                    </div>
                </section>                
                <br/>
                <h2>{lang === 'En' ? 'Some features...' : 'Algunas características...'}</h2>
                <br/>
                <section>
                    <h2>{lang === 'En' ? 'User pseudo account' : 'Pseudo cuentas de usuario'}</h2>
                    {lang === 'En' 
                    ?<p>
                        The app makes use of localStorage to save the dogs created by the user and the ones saved as "favorites" without the need of account creation.
                    </p>
                    :<p>
                        La aplicación utiliza el localStorage para guardar los perros creados por el usuario y los que haya agregado a favoritos sin la necesidad de crear una cuenta.
                    </p>}
                    <div className='p-details-img-container'>
                        <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665171192/portfolio-preview/Screenshot_2022-10-07_163145_td4hyu.png" alt="" />
                    </div>
                </section>
                <section>
                    <h2>{lang === 'En' ? 'Wikipedia information' : 'Información de Wikipedia'}</h2>
                    {lang === 'En' 
                    ?<p>
                        The Dog API have some missing information about some dogs. To solve this issue, the backend search a description about the selected breed on the Wikimedia API and adds it to the response.
                    </p>
                    :<p>
                        La API the Dogs tiene información faltante sobre algunos perros. Para solucionar este problema, el backend busca descripciones sobre el perro indicado con la API de Wikimedia y la agrega a la respuesta. 
                    </p>}
                    <div className='p-details-img-container'>
                        <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665171192/portfolio-preview/Screenshot_2022-10-07_162922_pd65nu.png" alt="" />
                    </div>
                </section>
            </div>
        </div>

    </div>
  )
}

export default Dogs

