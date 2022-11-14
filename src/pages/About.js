import React, {useEffect} from 'react';

import { TypeAnimation } from 'react-type-animation';

import AOS from 'aos';
import 'aos/dist/aos.css';

import RayaneImage from '../components/RayaneImage';
import classes from '../styles/about.module.scss';

const About = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div className={classes.container} id='about'>
            <div className={classes.image} data-aos="fade-up-right">
                <RayaneImage />
            </div>
            <div className={classes.content} data-aos="fade-up-left">
                <TypeAnimation
                    sequence={['Me, Myself and I', 1000, '']}
                    speed={30}
                    wrapper='p'
                    repeat={Infinity}
                />
                <p>
                    My name is <b>Rayane</b>. I'm a full-stack Web Developer and a Canva
                    Designer located in Lebanon. I love to mix up these two
                    skills to create attractive user interfaces. I have a
                    serious passion in <b>JavaScript</b>. That is why I choosed
                    MERN Stack to build and deploy web applications.
                </p>
                <p>
                    Well-organised person, problem solver, independent employee
                    with high attention to details. Fan of <b> FC Barcelona</b>,
                    <b> Nasa</b>,<b> Books</b>,<b> Math</b> and
                    <b> Geography</b>, I can always find a way to succeed. As a{' '}
                    <b>Family Person</b>, I'm always surrounded by a calm and
                    lovable atmosphere.
                </p>
                <p>
                    Interested with the entire Web Development spectrum and
                    working on ambitious projects.
                </p>
            </div>
        </div>
    );
};

export default About;
