require('dotenv').config();
const express = require('express');
const {dbConnection} = require('./src/db/config');
const cors = require('cors');

const app = express();
dbConnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).send({ message: "You are connected to the project" });
});

app.use("/api/productos", require("./src/routes/productos.routes"));
app.use("/api/usuarios", require("./src/routes/usuarios.routes"));

app.listen(process.env.PORT, () =>{
    console.log('App listening on PORT: '+process.env.PORT);
})

module.exports = app;
