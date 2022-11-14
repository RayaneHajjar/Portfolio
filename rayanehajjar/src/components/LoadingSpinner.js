import React from 'react';
import classes from '../styles/loadingspinner.module.scss';

const LoadingSpinner = (props) => {
    return (
        <svg className={classes.spinner} viewBox='0 0 50 50'>
            <circle
                className={classes.path}
                cx='25'
                cy='25'
                r='20'
                fill='none'
                strokeWidth='5'
            ></circle>
        </svg>
    );
};

export default LoadingSpinner;
