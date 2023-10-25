const { call } = require("body-parser");
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient
const mongoDbUrl = "mongodb+srv://elvira-0:elvira-0@cluster0.2m74irc.mongodb.net/shop?retryWrites=true&w=majority"

let _db;

const initDb = callback =>{
    if(_db){
        console.log('Database is already initialzed!');
        return callback(null, _db)
    }
    MongoClient.connect(mongoDbUrl)
    .then(client=>{
        _db = client;
        callback(null, _db)
    })
    .catch(err=>{
        callback(err)
    })
};

const getDb = () => {
  if(!_db){
    throw Error('Database not initialized!')
  }
    return _db
}

module.exports = {
    initDb,
    getDb
}