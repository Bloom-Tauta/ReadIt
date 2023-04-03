import { useState, useEffect } from 'react';
import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom';
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
// import Review from './components/Review';

import bg_image from './components/image/background.jpg'
import LogOut from './components/LogOut';
import LandingPage from './components/LandingPage';


function App() {
  
  const [path, setPath] = useState("/")

  const [user,setUser] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    setPath(window.location.pathname)
    if(sessionStorage.getItem('jwt')) {
      fetch("http://127.0.0.1:3000/me",{
      method:'GET',
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem('jwt')}`
      }
    } )
    .then(response => {
      if (response.status === 200) {
        response.json().then(data => setUser(data))
      }
      else {
        setUser(null)
      }
    })
  } else {
      navigate("/login")
  }
    
  }, [])

  function loginUser(user) {
    setUser(user)
  }

  return (
    <div className="AppContainer">
      { path !== '/' ?
      <div className='maincontainer absolute top-0 left-0 right-0 bottom-0 border border-black border-3'>
        <img src={bg_image} alt="loading..." className='block' />
      </div>
      :null
      }
    <div className={ path !== '/' ? "absolute left-0 right-0" : ""}>
        <NavBar setPath={setPath} user={user} loginUser={loginUser}/>
        <Routes>
          <Route path='/landingpage' exact element={<LandingPage setPath={setPath}/>}/>
          <Route path='/' exact element={<Home user={user}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login loginUser = {loginUser}/>}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/articles/:id' element={< ArticleDetails />} />
          
          <Route path='/article/:id/edit' element={<EditArticle />} />
          <Route path="/new-article" element={<NewArticle />} />
        </Routes> 
          {/* <Review/> */}
        <Footer/>
           
      </div>
    </div>

  );
}

export default App;