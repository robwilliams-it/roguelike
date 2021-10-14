const express = require('express');
const cors = require('cors');
const log = require('./login.js');
const path = require('path');

const app = express();
const PORT = 1337 || process.env.PORT;

app.use(express.static('build'));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.post('/signup', (req,res) => {
  console.log(req.body);
  res.end();
})

app.post('/', (req,res) => {
  log.login(req.body, (data, error)=>{
    if (error) {
      res.statusCode = 500;
      res.end();
    } else {
      res.end();
    }
  })
})

app.get('/', (req, res)=> {
  const filePath = path.join(__dirname, '../build', 'index.html');
  res.sendFile(filePath);
})
