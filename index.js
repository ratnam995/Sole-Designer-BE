const express = require("express");
const bodyParser = require("body-parser");
var mysql      = require('mysql');
// const db = require("./config/db");
const app = express();
// const authMiddleware = require("./app/auth-middleWare");
var router = express.Router();


const port = 8001;


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'goldtree9',
    database : 'sole_designer_DB'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

connection.connect((err)=> {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return err;
    }
    require("./app/routes")(app, connection);
    console.log('connected as id ' + connection.threadId);
    app.listen(port, () => {
        console.log("We are live on " + port);
    });
});