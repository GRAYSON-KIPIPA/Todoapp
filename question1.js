const http = require('http');

const express = require('express');
const app = express();


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
  app.get('/udsm', (req, res) => {
    res.send('<h1>Hello World<h1/>');
    res.end();
  })

   //This code allow browser to listen to the specified port number
app.listen(3000, 'localhost', ()=>{
    console.log('browser is listening from server')
})

