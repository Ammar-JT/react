import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

/*
//import styled from 'styled-components';
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : '#black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
*/

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  //i added this so if user submit and didn't fill the input this isValid will be false:
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    //trim remove any space or jump line:
    if(enteredValue.trim().length === 0){
      //if the user submit an empty input:
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* this is an inline styling, finally i found an advantage over Laravel!!
          this conditional styling is really great:
        
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'transparent'}} type="text" onChange={goalInputChangeHandler} />
        */}
      
        {/* FormControl is a component but not exported, so it used only locally
          ..and here we used the components features an passed the attribute invalid={!isValid}
        */}

        {/**
         * notice that we didn't use styles.form-control because its a class name and already start with dot (.form-control)
         */}

        {/*<div className={styles['form-control']}> */} {/* invalid={!isValid} */} {/* className={!isValid && 'invalid'} */} {/*className={`form-control ${!isValid ? 'invalid' : ''}`}*/}
        <div className={` ${styles['form-control']} ${!isValid && styles.invalid} `}>
          <label>Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler} />
        </div>
      

      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
