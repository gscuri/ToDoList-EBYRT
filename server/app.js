const express = require('express');
const { error } = require('./middleware/error');

const app = express();
const port = 3000;
const todolistRoute = require('./routes/todo');

app.use(express.json());
app.use('/todo', todolistRoute);

app.use(error);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
