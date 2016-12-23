// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    console.log("Connected to MongoDb server.");

  //   db.collection('Todos').deleteMany({text: "Practice singing"}).then((result) =>
  //   {console.log(result);}
  // )

    db.collection('Users').findOneAndDelete({_id: new ObjectID("585c4d71d129951750637624")}).then((result) =>{
      console.log(result);
    })

    db.close();
}
);
