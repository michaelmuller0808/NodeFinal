const express = require('express');
const app_routes = require('./router/axios.js').general;
const app = express();
app.use(express.json());
app.use("/", app_routes);
const PORT =5001;
app.listen(PORT,()=>console.log("Server is running"));


