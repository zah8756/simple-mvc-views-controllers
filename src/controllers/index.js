const path = require('path');

// There is no reason for the name here except an arbitary example
// of updating the server data based on a client request.
let name = 'unknown';

const hostIndex = (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../../views/index.html`));
};

const hostPage1 = (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../../views/page1.html`));
};

const hostPage2 = (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../../views/page2.html`));
};

const notFound = (req, res) => {
  res.status(404).sendFile(path.resolve(`${__dirname}/../../views/notFound.html`));
};


const getName = (req,res) => {
  res.json({name});
} 

const setName = (req,res) => {
  if(!req.body.firstname || !req.body.lastName){
    return res.status(400).json({error:'first name and last name required'})
  }
  name = `${req.body.firstname} ${req.body.lastName}`;

  res.json({name});
}

module.exports = {
  index:hostIndex,
  page1:hostPage1,
  page2:hostPage2,
  notFound,
  getName,
  setName
}
