import { useWorkoutContext } from '../../hooks/useWorkoutContext'
import React from 'react';
import './WorkoutDetails.css';

const WorkoutDetails = ({ oneWorkout }) => {
  const { dispatch } = useWorkoutContext();
  const createdAtDate = new Date(oneWorkout.createdAt).toISOString().substring(0, 10);

  const deleteWorkout = async () => {
    const response = await fetch(`/server/api/workouts/${oneWorkout._id}`, {
      method: 'DELETE',
    });
    const json = await response.json();
    dispatch({ type: 'DELETE_WORKOUT', payload: json });
    
  };

  return (
    <div className="workout-details">
      <h4>{oneWorkout.title}</h4>
      <p><strong>Load (kg): </strong>{oneWorkout.load}</p>
      <p><strong>Number of reps: </strong>{oneWorkout.reps}</p>
      <p>{createdAtDate}</p>
      <button onClick={deleteWorkout}>delete</button>
    </div>
  );
};

export default WorkoutDetails;
