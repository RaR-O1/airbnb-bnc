//core modules
const path = require('path');   

//external modules
const express = require('express'); 
 
const userRoutes = express.Router();
//internal modules
const rootDir = require('../utils/path');

userRoutes.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = userRoutes;