import { BrowserRouter,Routes, Route } from 'react-router-dom';
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
  return (

    <div className="AppContainer min-h-full">
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