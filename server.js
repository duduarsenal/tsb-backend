const express = require("express");
const app = express();
const cors = require('cors')

const mongoose = require('mongoose');
const { URI, PORT } = require("./src/config/config");

const userRoutes = require('./src/routes/user.Routes');
const InsurancesRoutes = require('./src/routes/insurances.Routes');

app.use(express.json());
app.use(cors())

app.use("/users", userRoutes);
app.use("/insurances", InsurancesRoutes);

mongoose
    .connect(URI)
    .then(() => { 
        app.listen(3030, () => console.log("Servidor conectado e rodando na porta: "+3030) )  
    })
    .catch((error) => console.log(error.message))
