import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
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
                  <Link to='/'>Home</Link>{' '}
                </li>
                <li>
                  <Link to='/recipes'>Recipes</Link>{' '}
                </li>
                <li>
                  <Link to='/login'>Login</Link>{' '}
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
