import React from 'react';
import classes from '../styles/loadingspinner.module.scss';

const LoadingSpinner = (props) => {
    return (
        <svg class={classes.spinner} viewBox='0 0 50 50'>
            <circle
                class={classes.path}
                cx='25'
                cy='25'
                r='20'
                fill='none'
                stroke-width='5'
            ></circle>
        </svg>
    );
};

export default LoadingSpinner;
