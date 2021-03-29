// const http = require('http');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//Register view Engine 
app.set('view engine','ejs')

//  app.use('/public', express.static(__dirname+ '/public'))



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

  //This was my of 26 may 2021 to save static files(WORKED WAY BUT COMPLICATED--Long endPoints)

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

  app.use(express.static(__dirname+ '/public'))




  //This is my task of 27 may on serving static files so look on it(BUT FAILED TO WORK)
//    app.get('/login', (req, res) =>{
//     console.log('waiting for result from user')
//      res.render('login1');
//      res.end()
//    })

//    app.get('/signup', (req, res) =>{
//     res.render('signUp1');
//   })

//   app.get('/home', (req, res) =>{
  
//     res.render('home');
//   })

//  app.get('/login1', (req,res) =>{
//   console.log(req.body.ename);
//     // res.send(`The login details are: ${req.body.ename} ${req.body.pname}.`);
//   })


//Task of 27 may 2021

app.use(express.static('views'))
app.get('/dynamic', (req, res) =>{
  res.render('dynamic')
})


app.get('/lala', (req, res) =>{
  res.render('lala')
})
  

  




  


















   //This code allow browser to listen to the specified port number
app.listen(3000, 'localhost', ()=>{
    console.log('browser is listening from server')
})

