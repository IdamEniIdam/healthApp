import { 
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    
} from "../types/authType";

const authState = {
    userInfo: {},
    isLoading: false,
    error: false,
    verification: null,
    isAuthenticated: false,
  }
  
  const userInformation = async () => {
    const getUser = await localStorage.getItem("userInfo");
    if (!getUser) {
      return authState;
    }
    const parsedUser = await JSON.parse(getUser);
    return {
      ...authState,
      userInfo: parsedUser,
      isAuthenticated: true,
    };
  };
  userInformation();


function userRegisterReducer(state = authState, action) {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return {...state, loading: true };
      case USER_REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          userInfo: action.payload
        };
      case USER_REGISTER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default: return state;
    }
  }
  
  
  function userSigninReducer(state = authState, action) {
  
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return {...state, loading: true };
      case USER_SIGNIN_SUCCESS:
        return {
          ...state,
        isLoading: false,
        isAuthenticated: true,
        userInfo: action.payload, 
        };
      case USER_SIGNIN_FAIL:
        return { ...state, isLoading: false, error: action.payload };
      case USER_LOGOUT_SUCCESS:
        return { ...state, isAuthenticated: false, userInfo: {} };
      default: return state;
    }
  }


const logout = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGOUT_REQUEST:
        return { ...state, isLoading: true };
      case USER_LOGOUT_SUCCESS:
        return { ...state, isLoading: false, userInfo: null };
      case USER_LOGOUT_FAIL:
        return { ...state, isLoading: false, error: action.payload };
      default: return state;
    }
  };


export {
    userSigninReducer,
    userRegisterReducer,
    logout,
  }