// const http = require('http');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');


//This session solve the first task
app.get('/', (req, res) => {
    const user = {
        id: 1,
       name:'kipipa',
       position:'USCR',
       age:25,
       isMarried:true
    }

       return res.json(user)
  })


  //This session solve the second task to display hello world
  app.get('/hello', (req, res) => {
    res.send('<h1>Hello World<h1/>');
    res.end();
  })

  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/form', (req, res) => {
  
    res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
  });

  app.post('/login1', (req,res) =>{
    res.send(`The login details are: ${req.body.ename} ${req.body.pname}.`);
  })

  app.post('/signUp1', (req,res) =>{
    res.send(`The login details are: ${req.body.uname} ${req.body.emname} ${req.body.phname} ${req.body.passname}.`);
  })

  app.use('/public', express.static(__dirname+ '/public'))


  

  




  


















   //This code allow browser to listen to the specified port number
app.listen(3000, 'localhost', ()=>{
    console.log('browser is listening from server')
})

