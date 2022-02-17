const { ObjectId } = require('mongodb');
const { connection } = require('../connection/connection');

const update = async ({ tasks, _id: id }) => {
  const db = await connection();
  await db.collection('ToDoList').updateOne({ _id: ObjectId(id) }, { $set: { tasks } });
  return { tasks, _id: id };
};

module.exports = { update };
