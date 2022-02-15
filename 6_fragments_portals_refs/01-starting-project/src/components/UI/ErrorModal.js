import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const BackDrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
  
}

const ErrorModal = (props) => {
  {/* createPortal() has 2 args:
    1- first one must be react nod (or jsx) that you want
    2- the place you want to transport this component to (it will be pure js dom manapulating) */}
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm}/>, 
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />, 
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ErrorModal;
