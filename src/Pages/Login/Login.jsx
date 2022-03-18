import React from 'react'
import { useNavigate } from 'react-router-dom'
import everylogopf_gris from '../../Assets/Images/Everylogopf_gris.png'
import {IoIosArrowBack} from 'react-icons/io'
import './Login.css'
//COMPONENTES
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import firebaseConfing from '../../config/firebase'
import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/user/login';


const Login = () => {
    const navigate = useNavigate()
    firebaseConfing()
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');

    const signIn = ()=>{
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const displayName = result.user.displayName.split(' ');
                //Enviamos los datos a la api
                axios.post(baseUrl, {
                    email : result.user.email,
                    name : displayName[0],
                    lastName : displayName[1],
                    loginWithSocial : true
                }) . then( () => {
                    navigate('/')
                })
            })
    }

    return (
        <div className='container-login'>
            <div className='card-button'>
            <button onClick={()=>navigate('/')} className='btn-login'><IoIosArrowBack/> Back</button>
            </div>
            <div className='card-login'>
            <div className='login-1'>
                <h1>Login</h1>
                <img src={everylogopf_gris} alt="logo" width="124px" height="78px" />
            </div>
            <div className='login-2'>

                <h4>Email</h4>
                <input type="text"
                placeholder='Username@gmail.com' />
                <h4>Password</h4>
                <input type="text" 
                placeholder='Password'/>
                <h4>Forgot password?</h4>
                <button>Sign in</button>
                <button onClick={ signIn }>LogIn with Google</button>

            </div>
            <div  className='login-3'></div>
            </div>
        </div>
    )
}
export default Login;