const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./database/database");
const characRoute = require("./Character/charac.routes");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/character/", characRoute);

connectToDatabase();

app.listen(port, () => console.log(`Rodando em http://localhost:${port}`));
