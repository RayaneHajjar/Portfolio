import React from 'react';
import classes from '../styles/contact.module.scss';
import ContactForm from '../components/ContactForm';

import 'aos/dist/aos.css';

const Contact = () => {
    return (
        <div className={classes.container} id='contact'>
            <div className={classes.content}>
                <p data-aos='zoom-in-down' data-aos-duration='1000'>
                    Get In Touch
                </p>
                <p
                    data-aos='zoom-out'
                    data-aos-anchor-placement='center-bottom'
                    data-aos-duration='2000'
                >
                    I'm always looking for new opportunities, so whether you
                    have a question or just want to say hi, I'll try my best to
                    get back to you!
                </p>
                <div
                    className={classes.form}
                    data-aos='fade-down'
                    data-aos-easing='linear'
                >
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
