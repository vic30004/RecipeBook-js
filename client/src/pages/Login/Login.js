import React, { Fragment } from 'react';
import './Login.css';
import Nav from '../../components/nav/Nav';
import Card from '../../components/Card/Card';
const Login = (props) => {
  const title = 'Register';
  const firstName = (
    <input
      type='text'
      name='first_name'
      placeholder='First Name'
      id='firstName'
      required
    />
  );
  const lastName = (
    <input
      type='text'
      name='last_name'
      placeholder='Last Name'
      id='lastName'
      required
    />
  );

  const userName = (
    <input
      type='text'
      name='username'
      placeholder='Username'
      id='username'
      required
    />
  );

  const email = (
    <input type='email' name='email' placeholder='email' id='email' required />
  );

  const password = (
    <input
      type='password'
      name='password'
      placeholder='Password'
      id='password'
      minLength='6'
      required
      
    />
  );

  const notMbr = (
    <h5 className="reg">
      Not a member? <a>Register!</a>{' '}
    </h5>
  );

 
    
  const registerBtn = <button>Register</button>;
  return (
    <Fragment>
      <Nav />
      <section id='register'>
        <div className='container'>
          <div className='form-content'>
            <Card
              register={true}
              title={title}
              firstName={firstName}
              lastName={lastName}
              userName={userName}
              email={email}
              password={password}
              registerBtn={registerBtn}
              notMbr={notMbr}
              param={props.match}

            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
