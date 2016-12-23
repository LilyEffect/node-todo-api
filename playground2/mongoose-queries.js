const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = 'aaaa585d8fd6af37bd17343d5b81';

// if (!ObjectID.isValid(id))
//   console.log("ID not valid.");
//
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log("Todo by Find:", todos);
// // });
// //
// // Todo.findOne({
// //   _id: id
// // }).then((todos) => {
// //   console.log("Todo FindOne: ", todos);
// // });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) console.log("ID Not found.");
//   else console.log("Todo by ID: ", todo);
// }).catch((e) => {console.log(e)});

var id = "585cb4392cc83f2348954eb0";

User.findById(id).then((user) => {
  if (user) console.log(JSON.stringify(user, null, 2));
  else console.log("User not found");
}).catch((e) => {console.log(e)});
