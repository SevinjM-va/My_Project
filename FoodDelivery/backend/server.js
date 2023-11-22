const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const db = require('knex')({
  client: 'pg',
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "1sevinc2",
    database: "FoodDelivery",
    port: 5432,
  }
});
app.use('db',db);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended:false
  })
);

app.get('/', function(req,res){
  res.send('api isleyir')

})
app.get('/signup', function(req,res){
  db("restaurants")
    .select("name")
    .then((el)=>res.send(el))
})

app.post('/signup', function(req,res){

})
app.listen(3500, ()=>{
  console.log('3500 port hazirdir')
})
