import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World! its vanshaj'));
app.get('/client.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../assets/clientbundle.js'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
