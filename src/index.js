import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import userController from '../controller/user';

const app = express();
const port = process.env.PORT || 3000;


// app.get('/', (req, res) => res.send('Hello World! its vanshaj'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/user', userController);

// app.get('/', (req, res) => res.send('Hello World! its vanshaj'));
app.get('/client.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../assets/clientbundle.js'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
