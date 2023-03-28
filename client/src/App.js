import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

import bg_image from './components/image/background.jpg'
import LogOut from './components/LogOut';

function App() {
  return (
    <div className="fixed top-0 border-2 border-black bg-sky-600 bottom-0">
      <img src={bg_image} alt="Sharon" />
      <div className='maincontainer absolute top-0 left-0 right-0 bottom-0 border border-black border-3'>
        <NavBar></NavBar>
        <Search></Search>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
