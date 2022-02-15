import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  /*
  (مشكلة)
  //this way of using useEffect() is perfect if we are validating inputs in the frontend,
  //.. but if we are dealing with http request for example, it will run with every key stroke (مع كل ضغطة زر)
  //.. That will be a stupidity cuz it will explode the traffic!!!
  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  }, [enteredEmail,enteredPassword]);
  */

  /*
  (حل المشكلة)
  //To solve the problem we use 2 things:
    1- setTimeout(): a js function that will delay the execution of the code inside it depanding on the second args (500 ms)
       .. notice that every key stroke will execute the whole login.js because we using the useState()!!
       .. so, delaying the code execution using setTimeout() will not be enough, we must clean the previous
       .. setTimeout() if we trigger a new setTimeout()!!! 
       .. How?????? by using:
    2- clearTimeout: in the return () of the useEffect()
       .. WTF does it mean?? clearTimeout() will clear all the setTimeout functions that triggered except the one you pass in the arg!!!
       .. so, any previous setTimeout() will be clear except the last one!
  */
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('checking form validity');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);


    return () => {
      console.log('cleanup');
      //This means clear all the setTimeout()s except this one (last one which we passed the identifier for):
      clearTimeout(identifier);
    };
  }, [enteredEmail,enteredPassword]);
  

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
