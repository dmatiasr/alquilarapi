const express = require("express");
const app = express();

app.listen(3000, () => {
 console.log("Server ON 3000");
});


var route = require('./routes/mainroute');


app.use('/', route)
