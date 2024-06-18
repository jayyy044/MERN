import { createContext, useReducer } from "react";
import React from 'react'
export const WorkoutContext = createContext()



export const WorkoutReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUT':
            return {
                Workouts: action.payload
            }
    }


}


export const WorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WorkoutReducer, {
        Workouts: null
    })
    dispatch({type: 'SET_WORKOUTS', payload: [{},{}] })
  return (
    <WorkoutContext.Provider value = {work}>
        { children }
    </WorkoutContext.Provider>
  )
}

