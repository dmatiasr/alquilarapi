const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();

port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log("Server Listening on "+ port+" port");
});


var route = require('./routes/mainroute');


app.use('/', route)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }));
app.use(cookieParser());
