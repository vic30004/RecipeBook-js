import React from 'react';
import './Header.css';
import Nav from '../nav/Nav';
import {Link} from 'react-router-dom'
export const Header = () => {
  return (
    <div>
    <Nav/>
    <header id='head'>
      <div className='container'>
        <div className='text-content'>
          <h1>RECIPE BOOK</h1>
          <p>Join to add your recipes and to find some delicious recipes!</p>
          <button className='joinBtn'> <Link to="/register">Join!</Link> </button>
        </div>
      </div>
    </header>
      </div>
  );
};

export default Header;