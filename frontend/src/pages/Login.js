import {useState} from 'react'
import { useLogin } from '../Hooks/useLogin'
import logoLogin from '../imgs/login.png'




const Login = ()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const { login , isLoading,error}=useLogin()
   
    const handleSubmit = async (e)=>{
     e.preventDefault()
     await login(email,password)
   }
   return(
    <div className='forum-img'>
      
      <form className='login'   onSubmit={handleSubmit} >
      
        
        <h3>Log in </h3>
        <label>Email : </label>
        <input   
        
        type='email'
        onChange={(e)=>setEmail(e.target.value)}
        value = {email}
        
        />

<label>Password : </label>
        <input   
        
        type='password'
        onChange={(e)=>setPassword(e.target.value)}
        value = {password}
        
        />
         <button disabled={isLoading} >Login</button>
         {error && <div className='error'>
          {error}
          </div>}
          

    </form>
    <img src={logoLogin} alt='img-login' className='centered-img' />
    </div>
   )

    

}

export default Login