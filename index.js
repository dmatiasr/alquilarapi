const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
const dbsequalize = require('./db/pgconnection')

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);


var route = require('./routes/mainroute');

/*dbsequalize.authenticate().then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })
*/


app.use('/', route)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }));
app.use(cookieParser());
