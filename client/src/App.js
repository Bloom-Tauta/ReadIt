import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ArticleDetails from './components/ArticleDetails';
import Footer from './components/Footer';
import NewArticle from './components/NewArticle';
import EditArticle from './components/EditArticle';
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
      <div>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/logout' element={<LogOut />} />
          <Route path='/articles/:id' element={< ArticleDetails />} />
          <Route path='/article/:id/edit' element={<EditArticle />} />
          <Route path="/new-article" element={<NewArticle />} />
        </Routes> 
           <Footer/>
      </div>
    </div>

  );
}
export default App;