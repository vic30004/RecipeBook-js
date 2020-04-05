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
  const [loginForm, setLoginFormData] = useState({
    logUser: '',
    logPass: '',
  });
  const authContext = useContext(AuthContext);
  const {
    setAlert,
    errorState,
    removeAlert,
    login,
    token,
    loadUser,
    registerUser,
    isAuthenticated,
  } = authContext;

  const { lastName, firstName, username, email, password } = formData;
  const {logUser,logPass} = loginForm

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
      //eslint-disable-next-line
      if (isAuthenticated) {
        props.history.push('/dashboard');
      }
    }
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

  const onLog = (e) =>
    setLoginFormData({ ...loginForm, [e.target.name]: e.target.value });

  const logSubmit = async (e) => {
    e.preventDefault();
    if (loginForm.username === '' || loginForm.password === '') {
      setAlert('Please fill in all fileds', 'danger');
    } else {
      let username = loginForm.username;
      let password = loginForm.password;
      login({username, password});
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser({
      username,
      firstName,
      lastName,
      email,
      password,
    });
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
              <form className='form-container' onSubmit={(e) => onSubmit(e)}>
                <input
                  type='text'
                  name='firstName'
                  value={firstName}
                  placeholder='First Name'
                  id='firstName'
                  required
                  onChange={(e) => onChange(e)}
                />{' '}
                <input
                  type='text'
                  name='lastName'
                  value={lastName}
                  placeholder='Last Name'
                  id='lastName'
                  onChange={(e) => onChange(e)}
                  required
                />{' '}
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  id='username'
                  value={username}
                  onChange={(e) => onChange(e)}
                  required
                />{' '}
                <input
                  type='email'
                  name='email'
                  placeholder='email'
                  id='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  id='password'
                  minLength='6'
                  value={password}
                  onChange={(e) => onChange(e)}
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
              <form
                className='form-container'
                onSubmit={(e) => {
                  logSubmit(e);
                }}
              >
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  id='username'
                  value={loginForm.username}
                  onChange={(e) => onLog(e)}
                  required
                />
                <input
                  type='password'
                  name='password'
                  value={loginForm.password}
                  placeholder='Password'
                  id='password'
                  minLength='6'
                  onChange={(e) => onLog(e)}
                  required
                />
                <button>Login</button>
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
              <form
                className='form-container'
                onSubmit={(e) => {
                  logSubmit(e);
                }}
              >
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  id='username'
                  value={loginForm.username}
                  value={username}
                  onChange={(e) => onLog(e)}
                  required
                />
                <input
                  type='password'
                  name='password'
                  value={loginForm.password}
                  placeholder='Password'
                  id='password'
                  minLength='6'
                  onChange={(e) => onLog(e)}
                  required
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
                  onChange={(e) => onChange(e)}
                />{' '}
                <input
                  type='text'
                  name='lastName'
                  value={lastName}
                  placeholder='Last Name'
                  id='lastName'
                  onChange={(e) => onChange(e)}
                  required
                />{' '}
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  id='username'
                  value={username}
                  onChange={(e) => onChange(e)}
                  required
                />{' '}
                <input
                  type='email'
                  name='email'
                  placeholder='email'
                  id='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  id='password'
                  minLength='6'
                  value={password}
                  onChange={(e) => onChange(e)}
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
