//core modues
const path = require('path');   
//external modules
const express = require('express'); 
const hostRoutes = express.Router();
//internal modules
const rootDir = require('../utils/path');       

hostRoutes.get('/hosts/addHome', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});
hostRoutes.post('/hosts/homeAdded', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRoutes;