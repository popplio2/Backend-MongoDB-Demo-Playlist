const express = require("express"); //this file requires express
const port = process.env.PORT || 3000; //use external server port or localhost 3000
const app = express(); //instatiate express 
require("./DB/mongoose"); //ensures mongoose connects and runs
const routes = require("./Routes/index"); //imports routes file (index.js)
//takes the raw request and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded());

app.use("/", routes); //when in home page, run this route
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});

