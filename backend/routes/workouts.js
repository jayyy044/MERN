const express = require('express')
const router = express.Router()
const {
    createNewWorkout,
    getAllWorkouts,
    getOneWorkout,
    deleteOneWorkout,
    updateOneWorkout
} = require('../controller/workoutController')

router.get('/', getAllWorkouts)

router.get('/:id', getOneWorkout)

router.post('/', createNewWorkout)

router.delete('/:id', deleteOneWorkout)

router.patch('/:id', updateOneWorkout)

module.exports = router