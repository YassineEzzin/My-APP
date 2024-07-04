import { useWorkoutsContext } from "../Hooks/useWorkoutsContext"

const workoutDetails = ({workout})=>{
  const {dispatch}= useWorkoutsContext
  const handelDelte= async ()=>{
   const response = await fetch('/api/workouts/' + workout._id,{
    method : 'DELETE'
   }) 
   const json = await response.json()

   if(response.ok){
    dispatch({type:'DELETE_WORKOUT' ,payload:json})
   }

      
   



  }
return(
  <div className="workout-details">
    <span onClick={handelDelte}> delete </span>
    <br/>
    <br/>
    
    <h4> {workout.problemeName} </h4>
    <p> <strong>timeToSolve :</strong> {workout.timeToSolve} </p>
    <p> <strong>  pieceRechange :</strong> {workout.pieceRechange} </p>
    <p> {workout.createdAt} </p>
    
  </div>
)
}
export default workoutDetails
