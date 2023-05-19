import React, { useEffect, useState } from 'react'
import '../../styles/login.css'
import { useNavigate } from "react-router-dom";
import bigLogo from '../../images/svgs/Logowithname.svg'
import closeButton from '../../images/svgs/CloseButton.svg'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registers } from '../../store/actions/authAction';
const Register = () => {
  const navigate = useNavigate();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const userRegister = useSelector(state => state.userRegister);
  const { error } = userRegister
  useEffect(() => { document.body.style.backgroundColor = '#100DB1' }, [])
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setLoadingStatus(true);
    try {
      dispatch(registers(data, navigate, setLoadingStatus))
    } catch (error) {
      alert(error.response.data.message)
      setLoadingStatus(false);
    }
  };

  return (
    <div >
        <div style={{ height: '40px' }}></div>
        <div style={{display: 'flex', justifyContent: 'center' }} >
        <img src={closeButton} alt="closebutton" />
        </div>
        <div style={{ height: '30px' }}></div>
         <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '686px', height: '750px', backgroundColor: 'white', borderRadius: '10px' }}>
           <div style={{ height: '84px' }}></div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={bigLogo} alt="log" />
        </div>
        <p className='text'>Register</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <p className='otherText'>Name</p>
                <input
                  style={{ border: '1px solid #E7E7E7', borderRadius: '40px', width: '448.76px', height: '40px' , padding: '8px 12px'}}
                  type="text"
                  placeholder="Name"
                  name="name"
                  {...register("name", {
                    required: "Name is required.",
                    minLength: {
                      value: 2,
                      message: "Name should be at-least 2 characters."
                    }
                  })}
                />

              </div>
              {errors.name && (
                <p style={{ color: 'red' }}>{errors.name.message}</p>
              )}
              <p></p>

              <p></p>
              <p></p>
              <div>
                <p className='otherText'>Email Address</p>
                <input
                  style={{ border: '1px solid #E7E7E7', borderRadius: '40px', width: '448.76px', height: '40px', padding: '8px 12px' }}
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
                  style={{ border: '1px solid #E7E7E7', borderRadius: '40px', width: '448.76px', height: '40px', padding: '8px 12px' }}
                  placeholder="Password"
                  type="password"
                  name="password"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message: "Password should be at-least 6 characters."
                    }
                  })}
                />

              </div>

            </div>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                {errors.password && (
                  <p style={{ color: 'red' }}>{errors.password.message}</p>
                )}
              </div>

              <div>
                <p></p>
              </div>
            </div>
            <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
            <div style={{ height: '30px' }}></div>


            <div onClick={handleSubmit(onSubmit)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#0B5ED7'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#100DB1'
              }}
              style={{ height: '45px', width: '507px', borderRadius: '10px', backgroundColor: '#0D6EFD', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              
              >
                       {loadingStatus ? (
                      <p style={{ margin: '0 auto' }}>loading</p>
                      ) : (
              <p style={{ color: 'white', fontSize: '14px', fontWeight: '600', margin: '0 auto', cursor: 'pointer' }}>Register</p>
              )}
            </div>

          </form>

        </div>
        <p></p>
            
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <p className='otherText'>Already have an account? </p>
          <div style={{ width: '5px' }}></div>
          <p style={{ color: '#100DB1', cursor: 'pointer', fontFamily: 'Poppins' }}  onClick={handleLogin}>Login</p>
        </div>
              <div style={{ height: '84px' }}></div>

      </div>
      </div>
    </div>
  )
}

export default Register