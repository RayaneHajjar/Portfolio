import React from 'react';
import classes from '../styles/design.module.scss';

const Design = () => {
    return (
        <>
            <h2 className={classes.design_title}>Design</h2>
            <ul className={classes.design_content}>
                <li>
                    First, I sketch my ideas using
                    <b> Microsoft Whiteboard.</b>
                </li>
                <li>
                    Then, I choose my color palette with the help of
                    <b> Adobe Color</b>.
                </li>
                <li>
                    After, I collect photos and illustrations from
                    <b> Undraw</b> and<b> Pinterest</b>.
                </li>
                <li>
                    A while later, I adjust my wallpapers and photos using
                    <b> Canva</b> and sometimes using
                    <b> Adobe Photoshop</b>.
                </li>
                <li>
                    Finally, I use<b> Figma</b> to visualize the real
                    positionning and styling of my App's components.
                </li>
            </ul>
        </>
    );
};

export default Design;
