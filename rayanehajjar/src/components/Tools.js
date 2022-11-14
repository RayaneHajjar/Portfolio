import React from 'react';
import classes from '../styles/tools.module.scss';

const Tools = () => {
    return (
        <>
        <h2 className={classes.tools_title}>Tools</h2>
            <ul className={classes.tools_content}>
                <li>
                    <b>VS Code</b> is my favorite IDE because it helps me to be
                    instantly productive with highlighting, snippets,
                    auto-indentation, keyboard shortcuts and more.
                </li>
                <li>
                    I use<b> Git</b> and<b> GitHub</b> to control my code
                    versions.
                </li>
                <li>
                    To debug and test the frontend of my applications,
                    <b> Chrome DevTools</b> is my all day solution. Also, I use 
                    <b> Postman</b> to test my APIs.
                </li>
                <li>
                    My own<b> Programming Guide</b> book is my daily life saver
                    to remember tiny details.
                </li>
            </ul>
        </>
    );
};

export default Tools;
