import React from 'react';
import classes from '../styles/languages.module.scss';

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaPython
} from 'react-icons/fa';
import { SiJquery, SiMysql, SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import { DiDjango } from 'react-icons/di';
import LanguageCard from './LanguageCard';

const Languages = () => {
    const languages = [
        {
            id: '1',
            title: 'HTML5',
            icon: <FaHtml5 />,
        },
        {
            id: '2',
            title: 'CSS3',
            icon: <FaCss3Alt />,
        },
        {
            id: '3',
            title: 'JavaScript',
            icon: <FaJs />,
        },
        {
            id: '4',
            title: 'Bootstrap',
            icon: <FaBootstrap />,
        },
        {
            id: '5',
            title: 'Tailwind',
            icon: <SiTailwindcss />,
        },
        {
            id: '6',
            title: 'jQuery',
            icon: <SiJquery />,
        },
        {
            id: '7',
            title: 'ReactJS',
            icon: <FaReact />,
        },
        {
            id: '8',
            title: 'NodeJS',
            icon: <FaNodeJs />,
        },
        {
            id: '9',
            title: 'Express',
            icon: <SiExpress />,
        },
        {
            id: '10',
            title: 'PHP',
            icon: <FaPhp />,
        },
        {
            id: '11',
            title: 'Python',
            icon: <FaPython />,
        },
        {
            id: '12',
            title: 'Django',
            icon: <DiDjango />,
        },
        {
            id: '13',
            title: 'MySQL',
            icon: <SiMysql />,
        },
        {
            id: '14',
            title: 'MongoDB',
            icon: <SiMongodb />,
        },
    ];

    const language_cards = languages.map((language) => (
        <LanguageCard
            key={language.id}
            title={language.title}
            icon={language.icon}
        />
    ));
    return (
        <>
            <h2 className={classes.languages_title}>Languages</h2>
            <div className={classes.languages_content}>{language_cards}</div>
        </>
    );
};

export default Languages;
