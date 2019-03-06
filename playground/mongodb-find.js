const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Users').find({
    //     _id: new ObjectID('5c52cee4b3144637e4f45097')
    // }).toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Users', err);
    // });
    // db.collection('Users').find().count().then((count) => {
    //     console.log(`Users Count: ${count}`);
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Users', err);
    // });
    db.collection('Users').find({name: 'aiden'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });
    // client.close();
});