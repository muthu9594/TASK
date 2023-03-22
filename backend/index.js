const express = require("express");

const app = express();
const Connection = require("./database/db");
const Route = require("./routes/route");
const Cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Cors());
app.use("/", Route);

app.listen(
  process.env.PORT || 5000,
  console.log(`Server started on port ${process.env.PORT} `)
);
Connection();
