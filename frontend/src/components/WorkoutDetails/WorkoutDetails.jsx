import React from 'react'
import './WorkoutDetails.css'

const WorkoutDetails = ({oneWorkout}) => {
  const createdAtDate = new Date(oneWorkout.createdAt).toISOString().substring(0, 10);

  return (
    <div className="workout-details">
      <h4>{oneWorkout.title}</h4>
      <p><strong>Load (lbs): </strong>{oneWorkout.load}</p>
      <p><strong>Number of reps: </strong>{oneWorkout.reps}</p>
      <p>{createdAtDate}</p>
    </div>
  )
}

export default WorkoutDetails   
  