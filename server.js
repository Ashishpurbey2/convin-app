const express = require("express")
const app = express()
require('dotenv').config()


const dbconfig = require("./config/dbconfig")
app.use(express.json)

const userRoute = require('./routes/userRoute')

app.use('/api/users',userRoute)

const port = 5000

app.listen(port,()=>console.log(`Node js server started at port ${port}`))
