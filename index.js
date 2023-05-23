const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "0.0.0.0" }));
app.use(express.json());

app.post("/", (req, res) => {
  console.log("Bateu aqui na API");

  res.json({ resposta: "Sucesso" });
})

app.listen(3333);