const mongoose = require('mongoose');

async function connectToMongo() {
  await mongoose.connect('mongodb+srv://abhinavSinwer:ouBB1SA6d0RltkVn@cluster01.fzf0jba.mongodb.net/Abhinav').
  //await mongoose.connect('mongodb://127.0.0.1:27017/Abhi').
  then(()=>{console.log("connect to mongo")});
}

module.exports={connectToMongo}