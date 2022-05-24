import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Blogs from './components/Home/Blogs/Blogs';
import Contact from './components/Home/Contact/Contact';
import Home from './components/Home/Home/Home';
import MyTools from './components/Home/MyTools/MyTools';
import Reviews from './components/Home/Reviews/Reviews';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='myTools' element={<MyTools></MyTools>}></Route>
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
      </Routes>

    </div>
  );
}

export default App;
