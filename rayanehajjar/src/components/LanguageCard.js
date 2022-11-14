import React from 'react';
import classes from '../styles/languagecard.module.scss'

const LanguageCard = (props) => {
    return (
        <div className={classes.language_card} data-aos="zoom-in">
            <div className={classes.language_icon}>{props.icon}</div>
            <p className={classes.language_title}>{props.title}</p>
        </div>
    );
}

export default LanguageCard;