const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();


app.listen(3000, () => {
 console.log("Server ON 3000");
});


var route = require('./routes/mainroute');


app.use('/', route)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }));
app.use(cookieParser());
