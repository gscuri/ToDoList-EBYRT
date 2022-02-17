const { connection } = require('../connection/connection');

const create = async ({ tasks }) => {
  const db = await connection();
  const { insertedId } = await db.collection('ToDoList').insertOne({ tasks });
  return { _id: insertedId };
};

module.exports = { create };
