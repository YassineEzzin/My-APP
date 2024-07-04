
import {useState} from 'react'
import {useAuthContext}  from './useAuthContext'




export const useLogin = ()=>{


    const [error,setErrror] = useState(null)
    const [isLoading , setIsLoading]=useState(null)
    const {dispatch} = useAuthContext()
     const  login = async (email,password) => {
        setIsLoading(true)
        setErrror(null)
        const response = await fetch('/api/user/login',{
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
            localStorage.removeItem('user', JSON.stringify(json))
            // update the auth 
            dispatch({type : 'LOGIN' , payload: json })
            setIsLoading(false)
           
    
    
        }
       
        
    }
    return { login , isLoading,error}
}