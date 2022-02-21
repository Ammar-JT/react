import React, { useState, useReducer, useEffect, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';


  //------------------------------------------------------------
  //                      useReducer()
  //------------------------------------------------------------
  /*
    //useState() use for var usually but useReducer() used for objects,
    //.. so you can setStates for many variables at once inside that object
  */

  const emailReducer = (state, action) => {
    if(action.type === 'USER_INPUT'){
      return {value: action.val, isValid: action.val.includes('@')};
    }
    if(action.type === 'INPUT_BLUR'){
      return {value: state.value, isValid: state.value.includes('@')};
    }
    return {value: '', isValid: false};
  };

  const passwordReducer = (state, action) => {
    if(action.type === 'USER_INPUT'){
      return {value: action.val, isValid: action.val.trim().length > 6};
    }
    if(action.type === 'INPUT_BLUR'){
      return {value: state.value, isValid: state.value.trim().length > 6};
    }
    return {value: '', isValid: false};
  };

const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
      value: '',
      isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
      value: '',
      isValid: null,
    });
  

  //------------------------------------------------------------
  //                      End of useReducer()
  //------------------------------------------------------------

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  //this is a destruction for a specific attribute inside an object,
  //.. you can use {isValid} and it will be enough for the destruction,
  //.. but sense there is 2 isValid variable you have to put allaises for the attrs:
  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;


  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value)
    //lets use dispatchEmail instead of setEnteredEmail()
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value
    });
    

    // setFormIsValid(
    //   event.isValid && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val:  event.target.value});

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const ctx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    }else{
      
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          id="email" 
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input 
          id="password" 
          label="Password"
          type="pasword"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
