import React, { Fragment } from 'react';
import './Nav.css';
const Nav = () => {
  return (
    <Fragment>
      <div className='menu-wrap'>
        <input type='checkbox' className='toggler' />
        <div className='hamburger'>
          <div></div>
        </div>
        <div className='menu'>
          <div>
            <div>
              <ul>
                <li>
                  <a href='#'> Home</a>{' '}
                </li>
                <li>
                  <a href='#'> Login</a>{' '}
                </li>
                <li>
                  <a href='#'>Recipes</a>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
