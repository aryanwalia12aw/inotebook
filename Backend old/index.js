const connectToMongo = require("./db");

connectToMongo();
const express = require("express");
const app = express();

const port = 5000
app.use(express.json())
//  availabes routes

app.use('/api/auth',require('./route/auth'))
app.use('/api/auth',require('./route/notes'))

app.get('/', (req, res) => {
  res.send('This is my backend file for my new project ')
})

app.listen(port, () => {
  console.log(`you are on port ${port}`)
})