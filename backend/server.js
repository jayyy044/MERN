{/*IP address of home PC 104.205.205.111
   IP address of Tablet 74.49.190.204 */}
require('dotenv').config();

const express = require('express')
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
const workoutRoutes = require('./routes/workouts')

const mongoose = require('mongoose')

const app = express();


app.use(cors(corsOptions))
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts',  workoutRoutes)

mongoose.connect(process.env.MONGO_URL)
 .then(() => {

    console.log('Connected to Database')

    app.listen(process.env.PORT, () =>{
        console.log(`Listening on Port ${process.env.PORT}`)
    })

 })
 .catch((error) =>{

    console.log(error)

 })
