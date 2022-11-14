import React from 'react';
import ReactDOM from 'react-dom';

import classes from '../styles/modal.module.scss';

import Backdrop from './Backdrop';

const ModalOverlay = (props) => {
    const content = (
        <div className={classes.modal}>
            <div>{props.children}</div>
            <footer>{props.footer}</footer>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('overlays'));
};

const Modal = (props) => {
    return (
        <>
            {props.show && <Backdrop onClick={props.onClose} />}
            <ModalOverlay {...props} />
        </>
    );
};

export default Modal;
