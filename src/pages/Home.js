import React from 'react';

import classes from '../styles/home.module.scss';

import { TypeAnimation } from 'react-type-animation';
import Particle from '../components/Particle';

const Home = () => {
    return (
        <div className={classes.container}>
            <Particle />
            <div className={classes.content}>
                <p>RAYANE HAJJAR</p>
                <TypeAnimation
                    sequence={[
                        "I'm a full stack web developer.",
                        2000,
                        '',
                        500,
                        "I'm in love with Javascript.",
                        2000,
                        '',
                        500,
                        "I'm driven by learning.",
                        2000,
                        '',
                        500
                    ]}
                    speed={60}
                    wrapper='p'
                    repeat={Infinity}
                />
            </div>
        </div>
    );
};

export default Home;