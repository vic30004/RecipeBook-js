import React,{Fragment} from 'react';
import './Login.css';
import Nav from '../../components/nav/Nav';
const Login = () => {
  return (
      <Fragment>
      <Nav/>
      <section id='login'>
        <div className='container'>
          <div className='form-content'>
            <h1>Login</h1>
            <form className='form-container'>
              <input
                type='text'
                name='first_name'
                placeholder='First Name'
                id='firstName'
                required
              />
              <input
                type='text'
                name='last_name'
                placeholder='Last Name'
                id='lastName'
                required
              />
              <input
                type='text'
                name='username'
                placeholder='Username'
                id='username'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='email'
                id='email'
                required
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                id='password'
                minLength='6'
                required
              />
              <button>Login</button>
            </form>
            <h5>
              Not a member? <a href=''>Register!</a>{' '}
            </h5>
          </div>
        </div>
      </section>
      </Fragment>
  );
};

export default Login;
