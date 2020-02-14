import React from 'react';
import Picture from '../../images/background .jpg';
import Logo from '../../images/Logo.png'
import './Header.css';
export const Header = () => {
  return (
    <header id='head'>
      <div className='container'>
        <div className='text-content'>
          <h1>RECIPE BOOK</h1>
          <p>Join to add your recipes and to find some delicious recipes!</p>
          <button className='joinBtn'>Join!</button>
        </div>
      </div>
    </header>
  );
};

export default Header;