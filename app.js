const express = require("express");
require('dotenv').config();
const routes = require('./server/routes/movieRoutes');

const PORT = 5000;

const app = express();


const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));




app.use('/', routes);  

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});