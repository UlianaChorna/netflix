const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require("./routers/auth.js")
const userRouter = require('./routers/users.js')
const movieRouter = require( './routers/movies.js');
const listRouter = require('./routers/list.js')

dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
   
    
}).then( ( ) => {
console.log("DB Connection")
}).catch((err) => console.log(err))

app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/movies",movieRouter);
app.use("/api/list",listRouter);

app.listen(8800,() => {
    console.log('backend is working')
})