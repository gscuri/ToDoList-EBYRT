const { connection } = require('../connection/connection');

const findAll = async () => {
  const db = await connection();
  const findTasks = await db.collection('ToDoList').find().toArray();
  return findTasks;
};

module.exports = { findAll };
