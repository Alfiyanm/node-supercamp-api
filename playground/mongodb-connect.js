// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// const obj = new ObjectID();
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Users').insertOne({
    //     name: 'muchlas',
    //     age: 24, 
    //     sallary: 35.000
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Hackers').insertOne({
    //     name: 'Aiden',
    //     age: 25,
    //     location: 'San Francisco'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Person', err);
    //     }
    //     console.log(result.ops);
    // });
    client.close();
});