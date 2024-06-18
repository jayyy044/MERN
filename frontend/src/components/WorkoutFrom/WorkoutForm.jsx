import React, { useState } from 'react';
import './WorkoutForm.css';
import { useWorkoutContext } from '../../hooks/useWorkoutContext';

const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        // Preventing refresh on submit
        event.preventDefault();
        
        const newWorkout = { title, load, reps };

        const response = await fetch('/server/api/workouts', {
            method: 'POST',
            body: JSON.stringify(newWorkout),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const jsonServerResponse = await response.json();

        if (!response.ok) {
            setError(jsonServerResponse.error);
        } else {
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            dispatch({ type: 'CREATE_WORKOUT', payload: jsonServerResponse });
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            
            <label>Exercise Title:</label>
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
                onChange={(event) => setReps(event.target.value)} 
                value={reps} 
            />
            <br/>
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default WorkoutForm;
