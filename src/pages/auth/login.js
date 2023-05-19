import React, { useEffect, useState } from 'react'
import '../../styles/login.css'
import { useNavigate } from "react-router-dom";
import bigLogo from '../../images/svgs/Logowithname.svg'
import closeButton from '../../images/svgs/CloseButton.svg'
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../../store/actions/authAction';

const Login = () => {
  const navigate = useNavigate();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const userSignin = useSelector(state => state.userSignin);
  const { error } = userSignin
  const dispatch = useDispatch();
  useEffect(() => { document.body.style.backgroundColor = '#100DB1' }, [])

    const handleRegister = () => {
      navigate("/register");
  }

  const handleForgotpassword = () => {
    navigate("/forgot-password");
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (values) => {
    setLoadingStatus(true);
    try {
      dispatch(signin(values, navigate, setLoadingStatus))

    } catch (error) {
      console.log('ERREO', error)
      alert(error.response.data.message)
      setLoadingStatus(false)
    }
  };

  return (
    <div >
  
        <div style={{ height: '84px' }}></div>
        <div style={{display: 'flex', justifyContent: 'center' }} >
        <img src={closeButton} alt="closebutton" />
        </div>
        <div style={{ height: '30px' }}></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      
        <div style={{ width: '686px', height: '695px', backgroundColor: 'white', borderRadius: '10px' }}>
          <div style={{ height: '84px' }}></div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={bigLogo} alt="log" />
          </div>
          <p className='text'>Login</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p></p>
                <div>
                  <p className='otherText'>Email Address</p>
                  <input
                    style={{ border: `1px solid ${errors.email ? 'red' : '#E7E7E7'}`, borderRadius: '40px', width: '448.76px', height: '40px', padding: '8px 12px' }}
                    type="text"
                    placeholder="Email"
                    name="email"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Email is not valid."
                      }
                    })}
                  />

                </div>
                {errors.email && (
                  <p style={{ color: 'red' }}>{errors.email.message}</p>
                )}
                <p></p>

                <p></p>
                <div>
                  <p className='otherText'>Password</p>
                  <input
                    style={{ border: `1px solid ${errors.password ? 'red' : '#E7E7E7'}`, borderRadius: '40px', width: '448.76px', height: '40px', padding: '8px 12px' }}
                    placeholder="Password"
                    type="password"
                    name="password"
                    {...register("password", {
                      required: "Password is required.",
                      // minLength: {
                      //   value: 6,
                      //   message: "Password should be at-least 6 characters."
                      // }
                    })}
                  />

                </div>
                <div>
                  {errors.password && (
                    <p style={{ color: 'red' }}>{errors.password.message}</p>
                  )}
                </div>

              </div>
              <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                
                    <p className='otherText'>Remember Me</p>
                
                </div>
                <div>
                  <p style={{ color: '#100DB1', cursor: 'pointer', fontFamily: 'Poppins' }} onClick={handleForgotpassword}>Forgot Password</p>
                </div>
              </div>
              <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
              <div
                onClick={handleSubmit(onSubmit)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#0B5ED7';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#100DB1';
                }}
                style={{
                  height: '59.13px',
                  width: '448.76px',
                  borderRadius: '40px',
                  backgroundColor: '#100DB1',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                {loadingStatus ? (
                  <p style={{ margin: '0 auto' }}>loading</p>
                ) : (
                  <p
                    style={{
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: '600',
                      margin: '0 auto',
                      cursor: 'pointer',
                    }}
                  >
                    Log In
                  </p>
                )}
              </div>


            </form>

          </div>
     
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                              <p className='otherText'>Don't have an account? </p>
                              <div style={{width: '5px'}}></div>
                              <p style={{ color: '#100DB1', cursor: 'pointer', fontFamily: 'Poppins' }} onClick={handleRegister}> Create an account</p>
                            </div>
        </div>
      </div>
    </div>
  )
}

export default Login