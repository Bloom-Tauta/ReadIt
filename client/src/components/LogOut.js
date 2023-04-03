import React from 'react'
import { useState, useEffect } from 'react';
function LogOut() {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
  
    function setCurrentUser(currentUser) {
      setUser(currentUser);
      setLoggedIn(true);
    }
  
    function logOut() {
      setUser({});
      setLoggedIn(false);
      localStorage.token = '';
    }
  
    useEffect(() => {
      const token = localStorage.token;
      if (typeof token !== 'undefined' && token.length > 1
        && token !== 'undefined'
      ) {
        fetch('/auto_login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        })
          .then((r) => r.json())
          .then((user) => setCurrentUser(user));
      } else {
        console.log('No token found, try logging in!');
      }
    }, []);
  return (
    <div>
      {loggedIn ? (
    <div className="logout-container">
      <button onClick={logOut} className="btn btn-secondary">Log Out</button>
    </div>
  ) : null}
    </div>
  )
}

export default LogOut
