import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import {
    userSigninReducer,
    userRegisterReducer,
    logout
    } from './reducers/authReducer';

    const rootReducer = combineReducers({
        userSignin: userSigninReducer,
        userRegister: userRegisterReducer,
        logout: logout,
      });
    
      const middleware = [thunk];
    
    const store = createStore(rootReducer, applyMiddleware(...middleware));
      export default store;