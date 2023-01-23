import React, { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import './register.scss'
import { useHistory } from 'react-router-dom'
function Register() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')

    const emailRef = useRef();
    const history = useHistory()
    const passwordRef = useRef();
    const usernameRef=useRef();
  
  const handleStart= () => {
        setEmail(emailRef.current.value)
    }
   

    const handleFinish = async (e) => {
      e.preventDefault()
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value)
        try{
          await axios.post('auth/register', {email,username,password});
          history.push("/login")
        }
        catch(err){

        }
       
    }
  return (
    <div className='register'>
          <div className='top'>
          <div className="wrapper">
    <img  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
    <button className='btn-login'>Sing in</button>
    </div>
    </div>
    <div className="container">
        <h1>Unlimited movies,TV shows , and more</h1>
        <h2>Watch anywhere.Cancel anytime </h2>
        <p>
            Ready to watch? Enter your email to create  or restart your membership
        </p>
      { !email ? ( 
        <div className="input">
            <input type="email"  placeholder='email' ref={emailRef}/>
            <button className='btn-register' onClick={handleStart}>Get Start</button>
        </div>) : (
             <form className="input">
             <input type="username"  placeholder='username' ref={usernameRef}/>
             <input type="password"  placeholder='password' ref={passwordRef}/>
             <button className='btn-register' onClick={handleFinish}> Start</button>
         </form>
        )}
    </div>
    </div>
   
  )
}

export default Register