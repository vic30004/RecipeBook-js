import React, { Fragment, useState,useContext,useEffect } from 'react';
import './Card.css';
import AuthContext from '../../components/context/auth/AuthContext';
const Card = props => {
  const flip = 'flip';

  const [clicked, setClicked] = useState();
  const [formData,setFormData]= useState({
    username:'',
    firstName:'',
    lastName:'',
    email:'',
    password:''
  })


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
              <Fragment>
              <Fragment>
            <h1>{props.title}</h1>
            </Fragment>
            <form className='form-container'>
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
            </Fragment>
          ) : (
              <Fragment>
              
              <h1>Login</h1>
            <form className='form-container'>
              
              {props.userName}
              {props.password}
              <h5 className='reg'>
                Already a member? <a onClick={setTrue}>Login!</a>{' '}
              </h5>
            </form>
            </Fragment>
          )}
        </div>

        <div className={'theback ' + (!clicked ? flip : '')}>
          {props.param.path !== '/login' ? (
              <Fragment>
               <h1>Login</h1>
            <form className='form-container'>
              {props.userName}
              {props.password}
              <button>Login</button>
              <h5 className='reg'>
                Already a member? <a onClick={setFalse}>Login!</a>{' '}
              </h5>
            </form>
            </Fragment>
          ) : (
              <Fragment>
             
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
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
