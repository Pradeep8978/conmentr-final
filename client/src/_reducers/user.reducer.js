import { 
    AUTH_SIGN_UP, 
    AUTH_SIGN_OUT, 
    AUTH_SIGN_IN, 
    AUTH_ERROR } from '../_constants/user.constants';
  
  const DEFAULT_STATE = {
    isAuthenticated: false,
    errorMessage: ''
  }
  
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
      case AUTH_SIGN_UP:
          localStorage.setItem('token', action.payload.token);
        return { ...state, profile:action.payload, isAuthenticated: true, errorMessage: '' }
      case AUTH_SIGN_IN:
          localStorage.setItem('token', action.payload.token);
          return { ...state, profile:action.payload, isAuthenticated: true, errorMessage: '' }
      case AUTH_SIGN_OUT:
        return { ...state, profile:'', isAuthenticated: false, errorMessage: '' }
      case AUTH_ERROR:
        return { ...state, profile:'', errorMessage: action.payload }
      default:
        return state
    }
  }