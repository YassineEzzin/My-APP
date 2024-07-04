
import {useAuthContext}  from './useAuthContext'
import {useState} from 'react'



export const useSignup = ()=>{


    const [error,setErrror] = useState(null)
    const [isLoading , setIsLoading]=useState(null)
    const {dispatch} = useAuthContext()
     const  signup = async (email,password) => {
        setIsLoading(true)
        setErrror(null)
        const response = await fetch('/api/user/singup',{
            method : 'POST',
            headers : {'Content-type':'application/json'},
            body : JSON.stringify({email,password})
        
        
        
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setErrror(json.error)
    
        }
        if(response.ok){
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            // update the auth 
            dispatch({type : 'LOGIN' , payload: json })
            setIsLoading(false)
           
    
    
        }
       
        
    }
    return { signup , isLoading,error}
}