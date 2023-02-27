import React  from 'react'
import {auth,provider} from './config'
import {signInWithPopup} from "firebase/auth";
import './Login.css'
function Login() {
    const handleClick =()=>{
           signInWithPopup(auth,provider)
        
    }
  return (
    <div>
        <div className='login-box'>
           <div onClick={handleClick} className='login'>
                <h5>Sign up with google</h5>
            </div>
            <div className='login-image'>
                <img src='https://th.bing.com/th/id/OIP.utgIykiGPDts7bk3Ro2oBgHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt='img'></img>
            </div>
        </div>
    </div>
  )
}

export default Login