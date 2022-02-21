import React, { useContext, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*
    ---------------------------------------------------------------------------------------
        ALL THIS REMOVED TO auth-context.js, USING THE الطريقة المرتبة FOR THE CONTEXT
    ---------------------------------------------------------------------------------------
    useEffect(() => {
      const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

      if (storedUserLoggedInInformation === '1') {
        setIsLoggedIn(true);
      }
    }, []);

    const loginHandler = (email, password) => {
      // We should of course check email and password
      // But it's just a dummy/ demo anyways
      localStorage.setItem('isLoggedIn', '1');
      setIsLoggedIn(true);
    };

    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };

  */
  
  //--------------------------------------------
  //                React Context Api
  //--------------------------------------------
  /*
    - we made context in store/auth-context.js
    - then we import it here and make a provider here in the father component (App)
    - every child component can use the auth properties or the methods that been pass to.
        - a property like isLoggedIn (which is written in auth-context) is passed here in the provider
        - a method like onLogout (which is not taken from auth-context!!) is passed here in the provider also
    - in the child components you can use the context by using the hook useContext!! (notice anything with useSomething called a hook here in react)
    
    - we used الطريقة المرتبة and الطريقة المقربعة, go to auth-context to learn more
    - using الطريقة المرتبة, we add the context provider to index.js, go and see it
    */

  const ctx = useContext(AuthContext);


  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
