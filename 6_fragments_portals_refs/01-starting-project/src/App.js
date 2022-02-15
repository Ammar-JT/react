import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

{/*
  ----------------------------------------------------
                Fragments, portal and refs
  ----------------------------------------------------
    1-Fragments: you can find it in the whole project, it's the wrapping tag of react instead of div (it's just an empty tags literally <> </>)
    2- Portal: you will find it in ErrorModal.js
    3- Refs: you will find it in addUser.js

*/}

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
