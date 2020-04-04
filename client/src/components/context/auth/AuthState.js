  
import React, { useReducer } from 'react';
import uuid from 'uuid';
import AuthContext from './AuthContext';
import axios from 'axios'
import setAuthToken from '../../../utils/SetAuthToken'
import AuthReducer from './AuthReducers';
import {
    REGISTER_USER,
    REGISTER_FAIL,  
    SET_ALERT,
    CLEAR_PROFILE,
    PROFILE_ERROR,
    REMOVE_ALERT,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    DELETE
    
  } from '../types';

  const AuthState = props => {
    const initialState = {
      profiles: [],
      errorState: [],
      auth:null,
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      loading:true,
      user:null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);


    //REGISTER USER,
  const registerUser = async({name,email,username,password})=>{
    const config = {
        headers:{
            
            'Content-Type':'application/json'
    }    

}

const body =JSON.stringify({name,email,username,password})

try{
    const res= await axios.post('/api/register',body,config);

    dispatch({
        type:REGISTER_USER,
        payload:res.data
    })
}catch(err){
const errors = err.response.data.error;
    loadUser()
if(errors){
   setAlert(errors,'danger')
   setTimeout(()=>{
       removeAlert()
   },5000)
}
    dispatch({
        type:REGISTER_FAIL
    })
}

}

}