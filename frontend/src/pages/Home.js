import {useEffect,}from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import {useWorkoutsContext } from '../Hooks/useWorkoutsContext'

const Home =()=>{
    const {workouts,dispatch}=useWorkoutsContext()
    useEffect (()=>{
        const fetchWorkouts = async ()=>{
            const response = await fetch('/api/work')
            const json = await response.json()  
            if(response.ok){
                dispatch({type:'SET_WORKOUTS',payload:json})
            }       
        }   
        fetchWorkouts()
    },
[])
    return(
        <div className="home">
            <div className='workouts'>
                {workouts && workouts.map((workout)=>(
                  <WorkoutDetails  key={workout._id} workout ={workout} />
                ))}</div>
               <div className='forum'><WorkoutForm/></div> 
            
        </div>
    )
}
export default Home