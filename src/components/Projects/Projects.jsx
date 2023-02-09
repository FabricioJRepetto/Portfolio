import React, { useEffect, useState, useRef } from 'react'
import ProjectsCards from './ProjectsCards';
import WipCard from './WipCard';
import Tictactoe from "./details/Tictactoe";
import Provider from './details/Provider';
import Dogs from './details/Dogs';
import { useLang } from '../../lang-context';

import './Projects.css'
import DietMate from './details/DietMate';

const Projects = ({ box }) => {
    const thread = useRef(null)
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(false);

    const { state: { lang } } = useLang();

    //? const WIP = false
    const WIP = [{
        title: lang === 'En' ? 'Hotel Management System' : 'Sistema de Gestión para Hotel',
        subtitle: lang === 'En' ? 'RESTful API' : 'RESTful API',
        text: lang === 'En' ? 'Database and UI design for hotel management system, with user role gerarchy.' : 'Diseño de base de datos y UI para sistema de gestión de un hotel, con gerarquía de roles para usuarios.',
        img: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1666385391/portfolio-preview/SURRPdY_qdpgak.gif',
        repo: '',
        earlyDeploy: ''
    },
    {
        title: lang === 'En' ? 'Mutant Image' : 'Mutant Image',
        subtitle: lang === 'En' ? 'SPA' : 'SPA, ',
        text: lang === 'En' ? 'Image manipulation' : 'Manipulación de imagenes',
        img: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1666385391/portfolio-preview/SURRPdY_qdpgak.gif',
        repo: '',
        earlyDeploy: ''
    }]

    const PROJECTS = [
        {
            title: 'Diet Mate',
            subtitle: lang === 'En' ? 'Meals organizer' : 'Organizador de comidas',
            text: lang === 'En' ? 'App to organize your meals and achieve a balanced diet.' : 'App para organizar tus comidas y conseguir una dieta balanceada.',
            link: 'https://weekly-diet.vercel.app',
            img: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1674140627/portfolio-preview/workout_card_gmpwqy.gif',
            index: 0
        },
        {
            title: 'TicTacToe Io',
            subtitle: lang === 'En' ? 'Online mini game' : 'Mini juego online',
            text: lang === 'En' ? 'Project exploring the posibilities given by web sockets.' : 'Proyecto que explora las posibilidades proporcionadas por los web sockets.',
            link: 'https://tictactoeio.vercel.app',
            img: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1668806564/portfolio-preview/tictactoe_cikpfc.gif',
            index: 0
        },
        {
            title: 'Provider store',
            subtitle: 'eCommerce',
            text: lang === 'En' ? 'Team project. User acount creation and management. Payments.' : 'Proyecto de equipo. Creación y administración de cuentas de usuario. Pagos.',
            link: 'https://providerstore.vercel.app',
            img: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1665013564/portfolio-preview/provider_dqwgm4.gif',
            index: 1
        },
        {
            title: 'Dog House',
            subtitle: 'SPA',
            text: lang === 'En' ? 'Database and multiple API comsumption. CRUD.' : 'Consumo de multiples API y base de datos. CRUD.',
            link: 'https://the-dog-house.vercel.app',
            img: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1665013245/portfolio-preview/dog_house_favapn.gif',
            index: 2
        }
    ]

    useEffect(() => {
        if (thread.current) thread.current.style.setProperty('--i', PROJECTS.length)

        // eslint-disable-next-line
    }, [thread.current])


    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 10);
        setTimeout(() => {
            setMounted(true)
        }, 700);
    }, [])

    useEffect(() => {
        setOpen(false)
        setMounted(false)
    }, [box])

    return (
        <div className={`projects-container`}>
            <div className={`box-projects ${box === 'p' && open && 'box-projects-open'}`}>
                <p className={`projects-title ${mounted && 'projects-title-on'}`}>
                    {lang === 'En' ? 'Projects' : 'Proyectos'}</p>
            </div>

            <div className={`p-cards-container ${box === 'p' && mounted && 'mounted'}`}>
                {PROJECTS.map((p) => (
                    <ProjectsCards key={p.title} data={p} setDetails={setDetails} lang={lang} />
                ))}
                {WIP &&
                    <div className={`workinprogress ${box === 'p' && mounted && 'mounted'}`}>
                        <h1>{lang === 'En'
                            ? 'Now developing...'
                            : 'En desarrollo...'
                        }</h1>
                        {WIP.map(e => (
                            <WipCard data={e} lang={lang} />
                        ))}
                    </div>}
            </div>

            {mounted && <div className="projects-thread" ref={thread}></div>}
            {details === 'Diet Mate' && <DietMate close={() => setDetails(false)} />}
            {details === 'TicTacToe Io' && <Tictactoe close={() => setDetails(false)} />}
            {details === 'Provider store' && <Provider close={() => setDetails(false)} />}
            {details === 'Dog House' && <Dogs close={() => setDetails(false)} />}
        </div>
    )
}

export default Projects
