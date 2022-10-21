import React from 'react'

import './Projects.css'

const WipCard = ({ data, lang }) => {
    const {
        title,
        subtitle,
        text,
        img,
        repo,
        earlyDeploy
    } = data

    return (
        <div className='wip-card-container'>
            <div className='card-head'>
                <h1>{title}</h1>
                <i>{subtitle}</i>
                <p>{text}</p>

                <span>
                    {repo &&
                        <a className='link-button' href={repo} target='_blank' rel='noreferrer'>{
                            lang === 'En' ? 'Repository' : 'Repositorio'
                        }</a>}
                    {earlyDeploy &&
                        <a className='link-button' href={earlyDeploy} target='_blank' rel='noreferrer'>{
                            lang === 'En' ? 'Visit early deploy' : 'Visitar página en desarrollo'
                        }</a>}
                </span>
            </div>

            <img src={img} alt="WIP" />
        </div>
    )
}

export default WipCard