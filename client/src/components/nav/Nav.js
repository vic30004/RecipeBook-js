import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import './Nav.css';
const Nav = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const guestLink = (
    <Fragment>
    <li><Link to='/login'>Login</Link></li>
    </Fragment>
    
  );

  const authLink = (
    <Fragment>
      <li>
        <Link onClick={onLogout}>Logout</Link>
      </li>
      <li>
        {' '}
        <Link to='/addRecipe'>Add a Recipe</Link>
      </li>
    </Fragment>
  );

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
                {isAuthenticated ? authLink : guestLink}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
