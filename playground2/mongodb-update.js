// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    console.log("Connected to MongoDb server.");

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("585c4efc1a015c304c12a408")
    }, {
      $set: { name: "Jay Lee" },
      $inc: { age: -1 }
    },
      {
        returnOriginal: false
      }).then((result) => {console.log(result)});

    db.close();
}
);
