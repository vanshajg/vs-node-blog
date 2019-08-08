const express = require('express');

const app = express();
const port = process.env.PORT;
const userController = require('./../controller/user');

const bodyParser = require('body-parser');

// app.get('/', (req, res) => res.send('Hello World! its vanshaj'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/user', userController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
