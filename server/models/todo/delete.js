const { ObjectId } = require('mongodb');
const { connection } = require('../connection/connection');

const remove = async (_id) => {
  const db = await connection();
  const removeTask = await db.collection('ToDoList').deleteOne({ _id: ObjectId(_id) });
  return removeTask;
};

module.exports = { remove };
