const express = require("express");
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const { URI } = require("./src/config/config");

const userRoutes = require('./src/routes/user.Routes');
const insurancesRoutes = require('./src/routes/insurances.Routes');

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/insurances", insurancesRoutes);

mongoose
    .connect(URI)
    .then(() => { 
        app.listen(3000, () => console.log("Servidor conectado e rodando na porta: 3000") )  
    })
    .catch((error) => console.log(error.message))
