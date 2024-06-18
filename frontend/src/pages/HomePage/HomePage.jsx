import React, { useEffect, useState } from 'react'
import './HomePage.css'
import WorkoutDetails from '../../components/WorkoutDetails/WorkoutDetails'
import WorkoutForm from '../../components/WorkoutFrom/WorkoutForm'

const HomePage = () => {
  const [allWorkouts, setallWorkouts] = useState(null)
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/server/api/workouts')
      const json = await response.json()

      if(response.ok){
        setallWorkouts(json)
      }
    } 

    fetchWorkouts()
  }, [])

  return (
    <div className="page">
      <h2>Home</h2>
      <div className="workouts">
        {allWorkouts && allWorkouts.map((oneWorkout) => (
          <WorkoutDetails key={oneWorkout._id} oneWorkout={oneWorkout} />
        ))}
      </div>
      <div className="sidebar"><WorkoutForm/></div>
    </div>

  )
}

export default HomePage