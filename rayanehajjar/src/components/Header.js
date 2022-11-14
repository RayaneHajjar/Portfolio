import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaTimes, FaBars } from 'react-icons/fa';
import { FaGithub, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';

import classes from '../styles/header.module.scss';

import logo from '../assets/Logo.png';

const Header = () => {
    //Check if the menu icon is clicked
    const [menuClicked, setMenuClicked] = useState(false);
    const menuClickedHandler = () => setMenuClicked(!menuClicked);
    const closeMenu = () => setMenuClicked(false);

    const [headerBackground, setHeaderBackground] = useState(false);
    const changeBackground = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 60) {
            setHeaderBackground(true);
        } else {
            setHeaderBackground(false);
        }
    };

    useEffect(() => {
        // adding the event when scroll change background
        window.addEventListener('scroll', changeBackground);
    });

    return (
        <div
            className={
                headerBackground
                    ? `${classes.header} ${classes.background}`
                    : classes.header
            }
        >
            {/* Logo Image */}
            <a href='/'>
                <img src={logo} alt="Rayane's logo" className={classes.logo} />
            </a>
            {/* Hamburger Icon */}
            <div className={classes.hamburger} onClick={menuClickedHandler}>
                {menuClicked ? <FaTimes /> : <FaBars />}
            </div>
            {/* Navigation Menu */}
            <ul
                className={
                    menuClicked
                        ? `${classes.nav_menu} ${classes.open}`
                        : classes.nav_menu
                }
            >
                <li className={classes.nav_item}>
                    <HashLink to='#about' onClick={closeMenu}>
                        About
                    </HashLink>
                </li>
                <li className={classes.nav_item}>
                    <HashLink to='#skills' onClick={closeMenu}>
                        Skills
                    </HashLink>
                </li>
                <li className={classes.nav_item}>
                    <HashLink to='#projects' onClick={closeMenu}>
                        Projects
                    </HashLink>
                </li>
                <li className={classes.nav_item}>
                    <HashLink to='#contact' onClick={closeMenu}>
                        Contact
                    </HashLink>
                </li>
            </ul>
            {/* Social Links */}
            <ul className={classes.soc_links}>
                <li>
                    <FaGithub
                        size={30}
                        onClick={() => {
                            window.open(
                                'https://github.com/RayaneHajjar',
                                '_blank'
                            );
                        }}
                    />
                </li>
                <li>
                    <FaInstagram
                        size={30}
                        onClick={() => {
                            window.open(
                                'https://github.com/RayaneHajjar',
                                '_blank'
                            );
                        }}
                    />
                </li>
                <li>
                    <FaPinterest
                        size={30}
                        onClick={() => {
                            window.open(
                                'https://github.com/RayaneHajjar',
                                '_blank'
                            );
                        }}
                    />
                </li>
                <li>
                    <FaLinkedin
                        size={30}
                        onClick={() => {
                            window.open(
                                'https://github.com/RayaneHajjar',
                                '_blank'
                            );
                        }}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Header;
