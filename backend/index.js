const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes/routes');

const cors = require('cors');

const cookieParser = require('cookie-parser');


const app = express();


app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));

app.use(cookieParser());


app.use(express.json());
app.use('/api', routes);

mongoose.connect("mongodb://localhost:27017/QuickHireDB", {
    useNewUrlParser: true}).then(()=> {
        console.log("database successfully connected!");
        app.listen(5000, ()=>{
            console.log("App is listening on port 5000");
        })
    });
    
