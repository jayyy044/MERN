import React, { useEffect,  } from 'react'
import './HomePage.css'
import WorkoutDetails from '../../components/WorkoutDetails/WorkoutDetails'
import WorkoutForm from '../../components/WorkoutFrom/WorkoutForm'
import { useWorkoutContext } from '../../hooks/useWorkoutContext'


const HomePage = () => {
  const {Workouts, dispatch} = useWorkoutContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/server/api/workouts')
      const json = await response.json()
      if(response.ok){
        dispatch({type: 'SET_WORKOUT', payload: json})
      }
    } 

    fetchWorkouts()
  }, [])

  return (
    <div className="page">
      <h2>Home</h2>
      <div className="workouts">
        {Workouts && Workouts.map((oneWorkout) => (
          <WorkoutDetails key={oneWorkout._id} oneWorkout={oneWorkout} />
        ))}
      </div>
      <div className="sidebar"><WorkoutForm/></div>
    </div>

  )
}

export default HomePage