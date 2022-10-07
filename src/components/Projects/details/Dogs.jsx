import React from 'react'

const Dogs = ({close}) => {
  return (
    <div className='project-details-container'>
        <button onClick={close}>cerrar</button>
        <h1>Dogs house</h1>
        <h2>SPA</h2>

        <section>
            <h2>Feature #1</h2>
            <p>
                
            </p>
        </section>
        <section>
            <h2>Feature #2</h2>
            <p>

            </p>
        </section>
        <section>
            <h2>How did I contribut to this project?</h2>
            <p>
                
            </p>
        </section>
        <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665094889/portfolio-preview/logo_dogs_rhjydh.png" alt="dogs logo" />
    </div>
  )
}

export default Dogs

