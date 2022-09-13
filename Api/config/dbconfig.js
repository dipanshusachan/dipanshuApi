const mysql = require("mysql");

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'pinia'
});

conn.connect((err)=>{
    if(err){
        console.warn("Erron in Connection")
    }
    else{
        console.warn("Connected Successfully")
    }

});

module.exports = conn;























