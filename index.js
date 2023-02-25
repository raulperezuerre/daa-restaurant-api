const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
const users = [{ name: 'Hugo' }, { name: 'Paco' }, { name: 'Luis' }];

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => res.json(users));

app.listen(3000, () => console.log(`Server listening at port ${port}`));
