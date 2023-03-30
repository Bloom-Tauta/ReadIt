import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ArticleDetails from './components/ArticleDetails';

// import bg_image from './components/image/background.jpg'
import LogOut from './components/LogOut';

function App() {
  return (

    <div className="AppContainer">
      {/* className="AppContainer" */}
      {/* <img src={bg_image} alt="loading..." className=''/> */}
      {/* <div className='maincontainer absolute top-0 left-0 right-0 bottom-0 border border-black border-3'> */}
      <div>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/article/:id' element={< ArticleDetails/> } />
        </Routes> 
           
      </div>
    </div>

  );
}

export default App;
