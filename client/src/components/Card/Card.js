import React, { Fragment, useState, useContext, useEffect } from 'react';
import './Card.css';
import AuthContext from '../../components/context/auth/AuthContext';
const Card = (props) => {
  const flip = 'flip';

  const [clicked, setClicked] = useState();
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const authContext = useContext(AuthContext);
  const {
    setAlert,
    errorState,
    removeAlert,
    registerUser,
    isAuthenticated,
  } = authContext;

  const { lastName,firstName, username, email, password, password2 } = formData;

  useEffect(() => {
    console.log(props.history)
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }
    //eslint-disable-next-line
  }, [isAuthenticated, props]);

  const setTrue = (e) => {
    e.preventDefault();
    setClicked(true);
  };
  const setFalse = (e) => {
    e.preventDefault();
    setClicked(false);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit =(e)=>{
      e.preventDefault();
      registerUser({
        username,
        firstName,
        lastName,
        email,
        password
      })
    }

  return (
    <Fragment>
      <div className={'thecard ' + (clicked ? 'hide' : 'show')}>
        <div className={'thefront ' + (clicked ? flip : '')}>
          {props.param.path !== '/login' ? (
            <Fragment>
              <Fragment>
                <h1>{props.title}</h1>
              </Fragment>
              <form className='form-container' onSubmit={e=>onSubmit(e)}>
              <input
              type='text'
              name='firstName'
              value={firstName}
              placeholder='First Name'
              id='firstName'
              required
              onChange={e => onChange(e)}

            />{' '}
            <input
              type='text'
              name='lastName'
              value={lastName}
              placeholder='Last Name'
              id='lastName'
              onChange={e => onChange(e)}

              required
            />{' '}
            <input
              type='text'
              name='username'
              placeholder='Username'
              id='username'
              value={username}
              onChange={e => onChange(e)}

              required
            />{' '}
            <input
              type='email'
              name='email'
              placeholder='email'
              id='email'
              value={email}
              onChange={e => onChange(e)}

              required
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              id='password'
              minLength='6'
              value={password}
              onChange={e => onChange(e)}

              required
            />
            <button>Register</button>;

                <h5 className='reg'>
                  Not a member? <a onClick={setTrue}>Register!</a>{' '}
                </h5>
              </form>
            </Fragment>
          ) : (
            <Fragment>
              <h1>Login</h1>
              <form className='form-container'>
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  id='username'
                  value={username}
                  onChange={e => onChange(e)}

                  required
                />
                <input
                  type='password'
                  name='password'
                  value={password}
                  placeholder='Password'
                  id='password'
                  minLength='6'
                  onChange={e => onChange(e)}

                  required
                />
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
                <input
                  type='text'
                  name='username'
                  value={username}
                  placeholder='Username'
                  id='username'
                  required
                  onChange={e => onChange(e)}

                />
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  id='password'
                  minLength='6'
                  required
                  onChange={e => onChange(e)}

                />
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
                <input
              type='text'
              name='firstName'
              value={firstName}
              placeholder='First Name'
              id='firstName'
              required
              onChange={e => onChange(e)}

            />{' '}
            <input
              type='text'
              name='lastName'
              value={lastName}
              placeholder='Last Name'
              id='lastName'
              onChange={e => onChange(e)}

              required
            />{' '}
            <input
              type='text'
              name='username'
              placeholder='Username'
              id='username'
              value={username}
              onChange={e => onChange(e)}

              required
            />{' '}
            <input
              type='email'
              name='email'
              placeholder='email'
              id='email'
              value={email}
              onChange={e => onChange(e)}

              required
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              id='password'
              minLength='6'
              value={password}
              onChange={e => onChange(e)}

              required
            />
            <button>Register</button>;
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
