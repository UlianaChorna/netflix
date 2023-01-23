import { CheckBox, Login } from '@mui/icons-material'
import { useContext, useState } from 'react'
import { login } from '../../authContext/apiCalls'
import { AuthContext } from '../../authContext/AuthContext'

import  './logo.scss'

function Logo() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    login({email,password}, dispatch)
  }

  return (
    <>
    <div className='logo'>
    <img  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
    </div>
    <div className="box">
        <form> 
      <div className="sing-in">
      <span className='title'>Sign in</span>
      <input type="email" placeholder='Email'onChange={(e) => setEmail(e.target.value )} />
        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value )} />
        <button onClick={handleLogin} >Sing In</button>
      
      <div className="remember">
        <CheckBox label=  'RememberMe'  className='checkbox'>Remember me</CheckBox>
        <span>Remember me</span>
        <span>Need help?</span>
    
      <div className="info">
        <span>New to Netflix? <a href='#!' >Sign up now.</a></span>
        <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#!">Learn more.</a> Learn more.</span>
        </div>
      </div>
      </div>
      </form>
    </div>
    
    </>
  )
}

export default Logo