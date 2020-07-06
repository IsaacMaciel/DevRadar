const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const port = 3333;

const app = express();
mongoose.connect(
  "mongodb+srv://devradar:devradar@cluster0.a9au2.mongodb.net/devradar?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor Back rodando na porta ${port}`);
});
