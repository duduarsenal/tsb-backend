const express = require("express");
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const { URI, PORT } = require("./src/config/config");

const userRoutes = require('./src/routes/user.Routes');
const insurancesRoutes = require('./src/routes/insurances.Routes');
const pixelsRoutes = require('./src/routes/pixels.Routes');

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/insurances", insurancesRoutes);
app.use("/pixels", pixelsRoutes)

mongoose
    .connect(URI)
    .then(() => { 
        app.listen(3000, () => console.log("Servidor conectado e rodando na porta: 3000") )  
    })
    .catch((error) => console.log(error.message))
