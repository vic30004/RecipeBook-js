import React, { Fragment, useState } from 'react';
import './Card.css';

const Card = props => {
  const flip = 'flip';

  const [clicked, setClicked] = useState();

  const setTrue = e => {
    e.preventDefault();
    setClicked(true);
  };
  const setFalse = e => {
    e.preventDefault();
    setClicked(false);
  };
  return (
    <Fragment>
      <div className={'thecard ' + (clicked ? 'hide' : 'show')}>
        <div className={'thefront ' + (clicked ? flip : '')}>
          {props.param.path !== '/login' ? (
            <form className='form-container'>
              <h1>{props.title}</h1>
              {props.firstName}
              {props.lastName}
              {props.userName}
              {props.email}
              {props.password}
              {props.registerBtn}

              <h5 className='reg'>
                Not a member? <a onClick={setTrue}>Register!</a>{' '}
              </h5>
            </form>
          ) : (
            <form className='form-container'>
              <h1>Login</h1>
              {props.userName}
              {props.password}
              <h5 className='reg'>
                Already a member? <a onClick={setTrue}>Login!</a>{' '}
              </h5>
            </form>
          )}
        </div>

        <div className={'theback ' + (!clicked ? flip : '')}>
          {props.param.path !== '/login' ? (
            <form className='form-container'>
              <h1>Login</h1>

              {props.userName}
              {props.password}
              <button>Login</button>
              <h5 className='reg'>
                Already a member? <a onClick={setFalse}>Login!</a>{' '}
              </h5>
            </form>
          ) : (
            <form className='form-container'>
              <h1>{props.title}</h1>
              {props.firstName}
              {props.lastName}
              {props.userName}
              {props.email}
              {props.password}
              {props.registerBtn}

              <h5 className='reg'>
                Not a member? <a onClick={setFalse}>Register!</a>{' '}
              </h5>
            </form>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
