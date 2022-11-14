import React, { useState } from 'react';
import { FaRegWindowMinimize } from 'react-icons/fa';
import classes from '../styles/skills.module.scss';

import 'aos/dist/aos.css';

import Design from '../components/Design.js';
import Tools from '../components/Tools.js';
import Languages from '../components/Languages.js';

const Skills = () => {
    const [skillType, setSkillType] = useState('languages');

    return (
        <div className={classes.container} id='skills'>
            <div className={classes.left_side}>
                <h1 data-aos="flip-up">Skills</h1>
                <ul className={classes.spoken_languages} data-aos="flip-right">
                    <li>AR</li>
                    <li>EN</li>
                    <li>FR</li>
                </ul>
                <ul className={classes.personal_skills} data-aos="flip-left">
                    <li>Team Worker</li>
                    <li>Idea Creator</li>
                    <li>Problem Solver</li>
                    <li>Time Organizer</li>
                    <li>Detail Tracker</li>
                    <li>Logical Thinker</li>
                    <li>Independent Learner</li>
                </ul>
            </div>
            <div className={classes.right_side}>
                <div className={classes.skill_content}>
                    {
                        {
                            languages: <Languages />,
                            design: <Design />,
                            tools: <Tools />,
                        }[skillType]
                    }
                </div>
                <ul className={classes.controls}>
                    <li className={ skillType === 'design' ? classes.active : '' }>
                        <FaRegWindowMinimize
                            onClick={() => {
                                setSkillType('design');
                            }}
                        />
                    </li>
                    <li className={ skillType === 'languages' ? classes.active : '' }>
                        <FaRegWindowMinimize
                            onClick={() => {
                                setSkillType('languages');
                            }}
                        />
                    </li>
                    <li className={ skillType === 'tools' ? classes.active : '' }>
                        <FaRegWindowMinimize
                            onClick={() => {
                                setSkillType('tools');
                            }}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
