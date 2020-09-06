//server
const express = require('express');
const Datastore = require('nedb');
require('dotenv').config()

const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))

const database = new Datastore('database.db')
database.loadDatabase();

app.listen(port, () => console.log('hey this is working at port 3000'));
console.log(process.env);

app.post(('/sample'), (request, response) => {
    const data = request.body;
    console.log(data);

    //inserting the data into a database
    database.insert(data)

    //sending back the response in normal JS format
    response.json(data)

})

app.get(('/database'), (request, response) => {
    database.find({}, (err, result) => {

        return response.json(result);
    })
})