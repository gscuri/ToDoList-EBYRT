const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/ToDoList`;
const DB_NAME = 'ToDoList';

let db = null;
const connection = async () => {
  try {
    db = db || (db = (await MongoClient.connect(MONGO_DB_URL)).db(DB_NAME));
    return db;
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};
module.exports = { connection };
