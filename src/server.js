import express from 'express';
import configViewEngine from './configs/viewEngine';

const app = express();
const port = 3000;

configViewEngine(app);

app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.get('/', (req, res) => {
  res.send('Hello World! My name is Hoan')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})