import React from 'react';
import ReactDOM from 'react-dom';
import classes from '../styles/backdrop.module.scss';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={props.onClick}></div>,
    document.getElementById('overlays')
  );
};

export default Backdrop;
