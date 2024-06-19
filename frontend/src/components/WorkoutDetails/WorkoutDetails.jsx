import React from 'react'
import './WorkoutDetails.css'
import { useWorkoutContext } from '../../hooks/useWorkoutContext'

const WorkoutDetails = ({oneWorkout}) => {
  const createdAtDate = new Date(oneWorkout.createdAt).toISOString().substring(0, 10);
  const { dispatch }= useWorkoutContext()

  const deleteworkout = async () => {
    const response = await fetch(`/server/api/workout/${oneWorkout._id}`,{
      method: 'DELETE',
    })
    const jsonResponse = await response.json
    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: jsonResponse})
    }
    
  }


  return (
    <div className="workout-details">
      <h4>{oneWorkout.title}</h4>
      <p><strong>Load (lbs): </strong>{oneWorkout.load}</p>
      <p><strong>Number of reps: </strong>{oneWorkout.reps}</p>
      <p>{createdAtDate}</p>
      <span onClick={deleteworkout}>Delete</span>
    </div>
  )
}

export default WorkoutDetails   
  