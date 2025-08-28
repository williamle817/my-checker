const express = require('express')
const Workout = require('../models/workoutModels')

const router = express.Router()

// get all workouts
router.get('/', (req, res) => {
    res.json({mssg: "get all workouts"});
})

// get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: "get a single workout"});
})

// create a new workout
router.post('/', async (req, res) => {
    const {title, reps, load} = req.body
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    console.log(title, reps, load);
})  

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: "delete a workout"});
})

// update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: "update a workout"});
})

module.exports = router