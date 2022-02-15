import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
/*
-------------------------------------
        use effect 
-------------------------------------
  //everytime state is change the app() function will be excuted again!!
  //.. so, if there is function need to be done once (only when the app start for example)
  //.. it will create an infinite loop if we put this function in the app()!!

  //Then,, what the solution??
  //.. Use useEffect() to pass this shitty side effect!!
  //.. this useEffect() function has two args:
      // 1- first one is a function containing the logic you want to execute
      // 2- second arg is the conditions to execute that function (they called it depandancies)


  //Where do we used side effet? in:
      // App.js: here
      // Login.js: we used the second arg there, the depandancies args (conditions)


-------------------------------------
        use reducer 
-------------------------------------
  //use reducer can be used instead of useState(), but it more complex.
  //.. it's perfect for nested states (the state that updated depanding on another state)

  
*/

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  //if you leave the second arg empty like this, the first arg (your logic function) will be executed once!
  useEffect(() => {
    //here we get the local stored data using js built-in function called localStorage
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if(storedUserLoggedInInfo === '1'){
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    //this local storage is a built-in function in js, no react, here we used it to store that the user is logged-in
    //.. first arg is the name of the var, second one is the value:
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
