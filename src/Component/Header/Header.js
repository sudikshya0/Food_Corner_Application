import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../Home/Home'
import Menu from '../Menu/Menu'
import About from '../About/About'
import Contact from '../Contact/Contact'
import './Header.css'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <BrowserRouter>
      <div className='header-container' >
        <div className='header'>
            <div className="header-logo">
                <img className='logo-img' src={logo}/>
            </div>
            <div className="header-left">
              <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to="/menu"><li>Menu</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
              </ul>
            </div>
        </div>

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/menu' element={<Menu/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Header