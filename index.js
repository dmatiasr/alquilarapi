const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
const os = require("os");
const hostname = os.hostname();
const clevercloud = require('./db/clever-cloud.setting')
const PropertyModel = require('./models/property.model')

// DB Local - DB Prod
//if (hostname == clevercloud['POSTGRESQL_ADDON_HOST']){
// const dbsequalize = require('./db/pgprodconnection')
//}else{
   const dbsequalize = require('./db/pglocalconnection')
//}


// routes
const route = require('./routes/mainroute');


// Server Configuration
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port,function(){
  console.log('')
  console.log('Working on', hostname +'\n')

});


// ORM DB connection

dbsequalize.sync({ force: true })
.then(function(err) {


  PropertyModel.create({
    name        : 'Test', 
    type        : 'Test', 
    description : 'Test',
    lat         : 'Test', 
    lon         : 'Test' 
}).success(function(sdepold) {
  console.log(sdepold.values)
})

  console.log('It worked!');
}, function (err) { 
  console.log('An error occurred while creating the table:', err);
});

app.use('/', route)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }));
app.use(cookieParser());
