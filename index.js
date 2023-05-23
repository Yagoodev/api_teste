const express = require("express");

const app = express();

app.post("/", (req, res) => {
  console.log("Bateu aqui na API");

  res.json({ resposta: "Sucesso" });
})

app.listen(3333);