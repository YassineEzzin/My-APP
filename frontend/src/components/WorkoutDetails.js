const workoutDetails = ({workout})=>{
return(
  <div className="workout-details">
    <h4> {workout.problemeName} </h4>
    <p> <strong>timeToSolve :</strong> {workout.timeToSolve} </p>
    <p> <strong>  pieceRechange :</strong> {workout.pieceRechange} </p>
    <p> {workout.createdAt} </p>
  </div>
)
}
export default workoutDetails
