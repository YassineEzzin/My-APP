import {useState} from 'react'
import {useSignup} from '../Hooks/useSignup'
import logo from '../imgs/singipImg.webp'


const Signup = ()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const { signup , isLoading,error}=useSignup()
   const handleSubmit = async (e)=>{
     e.preventDefault()
      await signup(email,password)
   }
   return(
    <div className='forum-img'>
      <img src={logo} alt='img-login' className='centered-img' />
   
    <form className='signup'   onSubmit={handleSubmit} >
        <h3>Sign up</h3>
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
         <button disabled={isLoading} >Sign up</button>
         {error && <div className='error'> {error} </div>}

    </form>
    </div>
   )



}

export default Signup




