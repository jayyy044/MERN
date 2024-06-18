import { createContext, useReducer } from "react";
import React from 'react'
export const WorkoutContext = createContext()



export const WorkoutReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUT':
            return {
                Workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                Workouts: [action.payload, ...state.Workouts]
            }
        default: 
            return state
    }
}

export const WorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WorkoutReducer, {
        Workouts: null
    })
  return (
    <WorkoutContext.Provider value = {{...state, dispatch}}>
        { children }
    </WorkoutContext.Provider>
  )
}

