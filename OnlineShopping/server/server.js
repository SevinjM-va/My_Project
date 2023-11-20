const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// const db = require('knex')({
//   client: 'pg',
//   connection: {
//     host: "127.0.0.1",
//     user: "postgres",
//     password: "1sevinc2",
//     database: "Learning_platform",
//     port: 5432,
//   }
// });



// app.use(express.static(path.join(__dirname, 'blog', 'public')));

app.get('/home', function(req,res){
  res.end('hello')
})
app.listen(3500);