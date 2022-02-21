import React, { useState, useEffect } from "react";

/*
//-----------------------------
//      الطريقة المقربعة
//-----------------------------
////// this way we only making the auth context, and then in App.js (which is the father component)
//////.. we used context provider to manage the context and send it to the whole structure (childs)

//as a best practise you can make the function onLogout (which is passed in the App.js) here also but an empty one
//.. why? because it make the ide suggist it.

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}
});

*/

//-----------------------------
//      الطريقة المرتبة
//-----------------------------
////// This way we make the auth context: 
        //a context 
        //a father component instead of App (father to App.js)
        // a state mananger and functions manager

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');

    };

    const loginHandler = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', '1');
    };
    return <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler,
        }}
    >{props.children}</AuthContext.Provider>;
};

export default AuthContext;
