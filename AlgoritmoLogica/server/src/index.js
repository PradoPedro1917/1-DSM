const express = require('express');
require('dotenv').config();

const user = require("./routes/user");

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.listen(port, function(){
    console.log(`Rodando na porta ${port}...`);
});

app.use("/user", user);