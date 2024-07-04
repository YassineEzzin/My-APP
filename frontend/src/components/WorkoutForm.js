import {useState} from 'react'

import { useWorkoutsContext } from '../Hooks/useWorkoutsContext'



const WorkoutForm = ()=>{
    const {dispatch}=useWorkoutsContext()
    const[problemeName,setProblemeName]=useState('')
    const[timeToSolve,setTimeToSolve]=useState('')
    const[pieceRechange,setPieceRechange]=useState('')
    const [error , setError]=useState(null)
    

    

    const handelSubmit = async (e)=>{
        e.preventDefault()
        const workout={
            problemeName,timeToSolve,pieceRechange
        };
        
      
        const  response = await fetch('/api/work',{
            method:'POST',
            body: JSON.stringify(workout),
            
            headers:{
                'content-type': 'application/json'
            }

        });
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
            console.log(error)
           
            
          
        }
        if(response.ok){
            setProblemeName('')
            setTimeToSolve('')
            setPieceRechange('')
            dispatch({type: 'CREATE_WORKOUT',payload:json})

        }
        
       
       

    }
    return(
   <form className='create' onSubmit={handelSubmit} >
    <h3> Add a new Workout  </h3>
    <label>Probleme Name :</label>
    <input  
    type="text"
    onChange={(e)=>setProblemeName(e.target.value)}
    value={problemeName}
    
    />
     <label>Piece Rechange :</label>
    <input  
    type="text"
    onChange={(e)=>setPieceRechange(e.target.value)}
    value={pieceRechange}
    
    />
     <label>Time To Solve (min) :</label>
    <input  
    type="text"
    onChange={(e)=>setTimeToSolve(e.target.value)}
    value={timeToSolve}
    
    />
    <button>Add Workout</button>
   
      
   
   </form>
    )
}
export default WorkoutForm
