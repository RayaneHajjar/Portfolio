import React from 'react';
import classes from '../styles/rayaneimage.module.scss';

const RayaneImage = () => {
    return (
        <div className={`${classes.shape_outer} ${classes.octagon}`}>
            <div className={`${classes.shape_inner} ${classes.octagon}`} />
        </div>
    );
};

export default RayaneImage;