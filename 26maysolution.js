const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));




app.post('/signup', (req, res) => {
    console.log(req.body)
    res.status(200).json({
        message: 'Login is successful',
        data: req.body
    })
})


app.listen(3000, 'localhost', () => {
    console.log('browser is listening from server')
})