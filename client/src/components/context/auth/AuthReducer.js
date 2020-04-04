  
import {

    SET_ALERT,
    REMOVE_ALERT,
    REGISTER_USER,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    DELETE,
  } from '../types';
  

  export default (state, action) => {
    const { type, payload } = action;
    switch (type) {

    case REGISTER_USER:
        localStorage.setItem('token',payload.token);
        return{
            ...state,
            ...payload,
            isAuthenticated:true,
            loading:true
        }

        case SET_ALERT:
            return {
              ...state,
              errorState:payload
            };
          case REMOVE_ALERT:
            return {
                ...state,
                errorState:[]
            };
            
        default:
            return state

    }
  }