import React, { useState } from 'react';
import { send } from 'emailjs-com';
import classes from '../styles/contactform.module.scss';
import Modal from './Modal';
import LoadingSpinner from './LoadingSpinner';

const ContactForm = () => {
    const [infos, setInfos] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const checkValidation = () => {
        if (infos.name === '' || infos.email === '' || infos.message === '') {
            setError('You must fill all fields!');
        } else {
            const validRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
            if (!infos.email.match(validRegex))
                setError('Please enter a valid email!');
            else setError('');
        }
    };

    const clearHandler = (event) => {
        event.preventDefault();
        setResponse('');
        setSubmitted(false);
    }

    const changeHandler = (event) => {
        setInfos({ ...infos, [event.target.name]: event.target.value });
        checkValidation();
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (error === '') {
            setSubmitted(true);
            send(
                'service_ddtsq6m',
                'template_gkk7cx9',
                infos,
                'jzrplrWHXzIlzGool'
            )
                .then(() => {
                    setResponse(
                        "Thank you for contacting me! I'll try my best to get back to you as soon as possible!"
                    );
                    setInfos({
                        name: '',
                        email: '',
                        message: '',
                    });
                })
                .catch((err) => {
                    setResponse('An error occured! Please try again later..');
                });
        }
    };

    return (
        <form onSubmit={submitHandler}>
            {response && (
                <Modal
                    onClose={clearHandler}
                    show={!!response}
                    footer={
                        <button className={classes.button} onClick={clearHandler}>
                            Okay
                        </button>
                    }
                >
                    {response}
                </Modal>
            )}
            <div className={classes.form_controls}>
                <div className={classes.form_control}>
                    <label className={classes.label}>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={infos.name}
                        onChange={changeHandler}
                        className={classes.input}
                    />
                </div>
                <div className={classes.form_control}>
                    <label className={classes.label}>Email</label>
                    <input
                        type='text'
                        name='email'
                        value={infos.email}
                        onChange={changeHandler}
                        className={classes.input}
                    />
                </div>
                <div className={classes.form_control}>
                    <label className={classes.label}>Message</label>
                    <textarea
                        rows='3'
                        name='message'
                        value={infos.message}
                        onChange={changeHandler}
                        placeholder='Type Something...'
                        className={classes.textarea}
                    />
                </div>
                <div className={classes.error}>{error}</div>
                <div className={classes.submit}>
                    {submitted ? <LoadingSpinner /> : <button type='submit' className={classes.button}>Submit</button>}
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
