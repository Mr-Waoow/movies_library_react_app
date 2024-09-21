import React from 'react';
import './App.css';
import logo from './images/logo_h.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <nav>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
        </nav>
    </div>
    </div>
  )
}

export default Header
