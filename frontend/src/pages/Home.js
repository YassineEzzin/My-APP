import {useEffect,useState}from 'react'

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


const Home =()=>{
    const [workouts,setWorkouts]=useState(null)
    useEffect (()=>{
        const fetchWorkouts = async ()=>{
            const response = await fetch('/api/work')
            const json = await response.json()  
            if(response.ok){
                setWorkouts(json)
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