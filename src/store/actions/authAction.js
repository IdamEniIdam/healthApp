import Axios from 'axios'
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
    // USER_LOGOUT
} from "../types/authType";

const registers = (data, navigate, setLoadingStatus) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: data });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
  };

  try {
    const response = await Axios.post(
      `http://127.0.0.1:8000/api/users/register`,
      {
        email: data.email,
        password: data.password,
        name: data.name,
      },
      config
    );
    console.log('RESPONSESSS DATASS', response.data.status);
    if (response.data.status === 'success') {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: response.data });
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      setLoadingStatus(false);
      console.log('ACTION REGISTER SUCCESSFUL', response.data);
      navigate('/login');
      setLoadingStatus(false);
    }
  } catch (error) {
    // console.log('registration error..', error.response.data.error);
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data.error });
    setLoadingStatus(false);
  }
};
  
  const signin = (values, navigate, setLoadingStatus) => async (dispatch, getState) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: values });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await Axios.post(
        `http://127.0.0.1:8000/api/users/login`,
        values,
        config
      );
      if (res.data.status === 'success') {
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: res.data });
        console.log('LOGIN SUCCESSFUL', res.data);
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        setLoadingStatus(false);
        navigate('/over-view');
      } else {
        dispatch({ type: USER_SIGNIN_FAIL, payload: res.data.message });
        setLoadingStatus(false);
      }
    } catch (error) {
    console.log('registration error..', error.response.data.message);
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.message });
      setLoadingStatus(false);
    }
  };
  
  const logout = (navigate, setLoadingStatus) => async (dispatch, getState) => {
    try {
      const { userSignin: { userInfo } } = getState();
      const token = userInfo.data.token;
      dispatch({ type: USER_LOGOUT_REQUEST });
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      };
      const res = await Axios.get(
        `http://127.0.0.1:8000/api/users/logout`,
        {},
        config
      );
      if (res.data.status === 'success') {
        dispatch({ type: USER_LOGOUT_SUCCESS, payload: res.data });
        localStorage.removeItem('userInfo');
        setLoadingStatus(false);
        navigate('/login');
      } else {
        dispatch({ type: USER_LOGOUT_FAIL, payload: res.data.message });
        setLoadingStatus(false);
      }
    } catch (error) {
      dispatch({ type: USER_LOGOUT_FAIL, payload: error?.response?.data?.message });
      setLoadingStatus(false);
    }
  };
  

  export {
    signin,
    registers,
    logout
  };