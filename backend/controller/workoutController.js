const Workout = require('../models/workouts_model')
const mongoose = require('mongoose')

//Creating a new workout
const createNewWorkout = async(req, res) => {
    const {title, load, reps} = req.body
   try{
        const newworkout = await Workout.create({
            title,
            load,
            reps
        })
        console.log("New workout Created")
        res.status(200).json(newworkout)
    
   }
   catch (error){
        console.log("Failed to create new workout")
        res.status(400).json({error: error.message})
   }
}
 
//Get all workouts
const getAllWorkouts = async (req, res) => {
    const allWorkouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(allWorkouts)
}

//Get specific workout
const getOneWorkout = async (req, res) => {
    const { id } = req.params
    if( !mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Workout Exists'})
    }
    const oneWorkout = await Workout.findById(id)
    if(!oneWorkout){
        res.status(404).json({error: "No such workout exists"})
    }
    res.status(200).json(oneWorkout)
}

//Deleting a Workout
const deleteOneWorkout = async (req, res) => {
    const { id } = req.params
    if( !mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Workout Exists'})
    }
    const delOneWorkout = await Workout.findOneAndDelete({_id: id})
    if(!delOneWorkout){
        res.status(404).json({error: "No such workout exists"})
    }
    res.status(200).json(delOneWorkout)
}

//update workout
const updateOneWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such Workout Exists' });
    }
    const updOneWorkout = await Workout.findOneAndUpdate(
        { _id: id },
        req.body ,
        { new: true }
    );
    if (!updOneWorkout) {
        return res.status(404).json({ error: "No such workout exists" });
    }
    res.status(200).json(updOneWorkout);
};





module.exports = {
    createNewWorkout,
    getAllWorkouts,
    getOneWorkout,
    deleteOneWorkout,
    updateOneWorkout
}
