import React,{useEffect} from 'react'
import '../../styles/login.css'
import { useNavigate } from "react-router-dom";
import bigLogo from '../../images/svgs/Logowithname.svg'
import { useForm } from 'react-hook-form';
const ForgotPassword = () => {
  const navigate = useNavigate();
  useEffect(() => { document.body.style.backgroundColor = '#100DB1' }, [])

  const handleLogin = () => {
    navigate("/");
}

const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm();

const onSubmit = (data) => {
  console.log(data);
};

    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '100vh'}}>
           <div style={{ width: '686px', height: '695px', backgroundColor: 'white', borderRadius: '10px'}}>
            <div style={{height: '84px'}}></div>

          <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <img src={bigLogo} alt="log" /> 
          </div>
          <p className='text'>Forgot Password</p>
          <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <p></p>
                                    <div>
                                        <p className='otherText'>Email Address</p>
                                        <input
                                            style={{ border: `1px solid ${errors.email ? 'red' : '#D9E2EC'}`, borderRadius: '40px', width: '507px', height: '40px', padding: '8px 12px' }}
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
                                        <p style={{color: 'red'}}>{errors.email.message}</p>
                                    )}
                                    <p></p>
                                 
                                    <p></p>
                          

                                </div>
                                <div style={{flexDirection: 'row', display: 'flex',justifyContent: 'space-between'}}>
                                    <div>
                                    {errors.password && (
                                    <p style={{color: 'red'}}>{errors.password.message}</p>
                                )}
                                    </div>
                                    <div>
                                    <p className='otherText' onClick={handleLogin}>Login</p>
                                    </div>
                                </div>
                             

<div
                            onClick={handleSubmit(onSubmit)}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#0B5ED7'
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#100DB1'
                            }}
                            style={{ height: '45px', width: '507px', borderRadius: '10px', backgroundColor: '#0D6EFD', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <p style={{ color: 'white', fontSize: '14px', fontWeight: '600', margin: '0 auto', cursor: 'pointer' }}>Submit</p>
                        </div>

                            </form>
                           
                        </div>
                        <p></p>
                      
          </div>
</div>
    )
}

export default ForgotPassword;