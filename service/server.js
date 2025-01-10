const http = require('http');
const si = require('systeminformation');
const express = require('express');
const _ = require('lodash');

var server = express();


server.get('/lodash', (req, res) => {
  res.json(_.capitalize('not vulnerable...'));
});

server.get('/services', (req, res) => {
  if (!req.query.name)
  {
    req.query.name = "*"
  }

  console.log('GET /services - ', req.query);
  
  //CVE-2021-21315
  si.services(req.query.name).then((data) => { 
  res.json(data);
  });
 
});

server.get('/ping', (req, res) => {
  if (!req.query.url)
  {
    req.query.url = "www.google.com"
  }

  console.log('GET /ping - ', req.query);

  si.inetChecksite(req.query.url).then((data) => { 
  res.json(data);
  });
 
});
  
server.listen(1300, () => console.log('CNCF SecurityCon Demo App (port=1300)...'))
