import React from 'react'
import everylogopf_gris from '../../Assets/Images/Everylogopf_gris.png'
import './Login.css'
export const Login = () => {
    return (
        <div className='container-login'>
            <div className='card-login'>
            <div  className='login-1'>
                <h1>Login</h1>
                <img src={everylogopf_gris} alt="logo" width="124px" height="78px" />
            </div>
            <div  className='login-2'>
                <h4>Email</h4>
                <input type="text"
                placeholder='username@gmail.com' />
                <h4>Password</h4>
                <input type="text" 
                placeholder='Password'/>
                <h4>Forgot password</h4>
                <button>Sign in</button>
            </div>
            <div  className='login-3'></div>
            </div>
        </div>
    )
}