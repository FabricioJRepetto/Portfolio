import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

import './details.css'

const Dogs = ({close}) => {
    const scroll = useRef(null)
    let maxScroll = 0
    const [scrolled, setScrolled] = useState(0)
    const [open, setOpen] = useState(true)

    const scroller = () => {
        let ele = document.getElementById('scrollContainer');
        setScrolled(Math.abs(ele.scrollTop * 100) / maxScroll);        
     }


    useEffect(() => {
        let scrollContainer
        if (scroll) {            
            scrollContainer = document.getElementById('scrollContainer')
            let aux = Math.abs(scrollContainer.scrollHeight - scrollContainer.clientHeight) + 110;
            // eslint-disable-next-line
            maxScroll = aux;
            console.log(maxScroll);
            scrollContainer.addEventListener('scroll', scroller)
        }

        return () => scrollContainer.removeEventListener('scroll', scroller)        
        // eslint-disable-next-line
    }, [])

    const closer = () => {
        setOpen(false)
        setTimeout(() => {
            close()
        }, 1000);
     }

  return (
    <>
        <div onClick={closer} className='details-close-button'></div>
        <div className={`project-details-container ${!open && 'details-close'}`}>

            <div className='project-details-header'>
                <h1>Dog House</h1>
                <div>
                    <h2>SPA</h2>
                    <a className='link-button' href='https://the-dog-house.vercel.app' target='_blank' rel='noreferrer'>visit web site</a>
                </div>
            </div>

            <div className='details-text-container'>
                <div className='scroll-bar' style={{top: `${scrolled}%`}}></div>
                <div className='p-details-content' id='scrollContainer' ref={scroll}>
                    <section>
                        <h2>What is Dog House?</h2>
                        <p>
                            This is a single page application that makes use of APIs (the dog API and Wikimedia API) to show information about different dog breeds, it can be filtered by multiple options at the same time.<br/> Users can create their own dogs in the platform (it's stored on a Postgres database) and see other users dogs too.
                        </p>
                        <div className='p-details-img-container'>
                            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665171351/portfolio-preview/Screenshot_2022-10-07_163520_ohj04q.png" alt="" />
                        </div>
                    </section>                
                    <br/>
                    <h2>Some features...</h2>
                    <br/>
                    <section>
                        <h2>User pseudo account</h2>
                        <p>
                            The app makes use of localStorage to save the dogs created by the user and the "favorites" without the need of account creation.
                        </p>
                        <div className='p-details-img-container'>
                            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665171192/portfolio-preview/Screenshot_2022-10-07_163145_td4hyu.png" alt="" />
                        </div>
                    </section>
                    <section>
                        <h2>Wikipedia information</h2>
                        <p>
                            The Dog API have some missing information about some dogs. To solve this issue, the backend search a description about the selected breed on the Wikimedia API and adds it to the response.
                        </p>
                        <div className='p-details-img-container'>
                            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665171192/portfolio-preview/Screenshot_2022-10-07_162922_pd65nu.png" alt="" />
                        </div>
                    </section>
                </div>
            </div>

        </div>
    </>
  )
}

export default Dogs

