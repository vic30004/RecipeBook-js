  
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
      case LOGIN_SUCCESS:
        localStorage.setItem('token',payload.token);
        return{
            ...state,
            ...payload,
            isAuthenticated:true,
            loading:true
        }

        case REGISTER_FAIL:
      case LOGIN_FAIL:
       localStorage.removeItem('token');
       return{
        ...state,
        token:null,
        isAuthenticated:false,
        loading: false,
        user:null,
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