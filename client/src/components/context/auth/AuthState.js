import React, { useReducer } from 'react';
import uuid from 'uuid';
import AuthContext from './AuthContext';
import axios from 'axios';
import setAuthToken from '../../../utils/SetAuthToken';
import AuthReducer from './AuthReducer';
import {
  REGISTER_USER,
  REGISTER_FAIL,
  SET_ALERT,
  REMOVE_ALERT,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';

const AuthState = (props) => {
  const initialState = {
    users: [],
    errorState: [],
    auth: null,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load user

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`,
        },
      };
      const res = await axios.get('/api/register/auth',config);
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.stack)
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  //REGISTER USER,
  const registerUser = async ({
    firstName,
    lastName,
    email,
    username,
    password,
  }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      firstName,
      lastName,
      email,
      username,
      password,
    });

    try {
      const res = await axios.post('/api/register', body, config);

      dispatch({
        type: REGISTER_USER,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.error;
      loadUser();
      if (errors) {
        setAlert(errors, 'danger');
        setTimeout(() => {
          removeAlert();
        }, 5000);
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

  // Login user

  const login = async ({username,password}) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ username, password });
    try {
      const res = await axios.post('/api/register/user', body, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      const errors = err.response;

      if (errors) {
        setAlert(errors, 'danger');
        setTimeout(() => {
          removeAlert();
        }, 5000);
      }
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.error,
      });
    }
  };

  // Log out user
  const logout = ()=>{

    dispatch({
      type:LOGOUT
    })
   
  }

  // Set Alert TODO add this to dom
  const setAlert = (msg, alertType) => {
    const id = uuid.v4();
    return dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });
  };

  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <AuthContext.Provider
      value={{
        users: state.users,
        errorState: state.errorState,
        token: state.token,
        registerUser,
        setAlert,
        loadUser,
        login,
        removeAlert,
        logout,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
