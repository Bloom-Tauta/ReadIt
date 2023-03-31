import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ArticleDetails from './components/ArticleDetails';
import EditArticle from './components/EditArticle';
import NewArticle from './components/NewArticle';
import LogOut from './components/LogOut';

function App() {

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
    <div className="AppContainer">
      <NavBar />
      {loggedIn ? (
        <h1 className="greeting-text">Welcome back {user.username}!</h1>
      ) : (
        <div className="please-log-in">
          <h3>Please log in !</h3>
        </div>
      )}
        {loggedIn ? (
          <span>
            <br />
            <button onClick={logOut}>Log Out</button>
          </span>
        ) : null}
        <br />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/articles/:id' element={< ArticleDetails />} />
          <Route path='/article/:id/edit' element={<EditArticle />} />
        <Route path="/new-article" element={<NewArticle />} />
        
        </Routes> 
    </div>

  );
}
export default App;
