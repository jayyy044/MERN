import React, { useState } from 'react'
import './WorkoutForm.css'


const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setRep] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = async (event) =>{
      //preventing refresh on click
      event.preventDefault()
      const newWorkout = {title, load, reps}
      const response = await fetch('/server/api/workouts',{
        method: 'POST',
        body: JSON.stringify(newWorkout),
        headers:{
          'Content-Type': 'application/json'
        },
      })
      const JsonServerResponse = await response.json()
      if(!JsonServerResponse.ok){
        setError(JsonServerResponse.error)
      }
      if(JsonServerResponse.ok){
        setTitle('')
        setLoad('')
        setRep('')
        setError(null)
        console.log('New Workout added')
        
      }
      
    }
  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>
      
      <label>Excersize Title:</label>
      <br/>
      <input 
        type="text" 
        onChange={(event) => setTitle(event.target.value)} 
        value={title}
      />
      <br/>
      <label>Load (in kg):</label>
      <br/>
      <input 
        type="number" 
        onChange={(event) => setLoad(event.target.value)} 
        value={load}
      />
      <br/>
      <label>Number of Reps:</label>
      <br/>
      <input 
        type="number" 
        onChange={(event) => setRep(event.target.value)} 
        value={reps} 
      />
      <br/>
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm