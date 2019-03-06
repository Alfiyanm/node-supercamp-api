const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('57abbcf4fd13a094e481cf2c')
      }, {
        $set: {
          name: 'Andrew'
        },
        $inc: {
          age: 1
        }
      }, {
        returnOriginal: false
      }).then((result) => {
        console.log(result);
      });
    // client.close();
});