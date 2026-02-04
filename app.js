//core modules 
const path = require('path');

//external modules
const express = require('express');

//internal modules
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const rootDir = require('./utils/path');

const app = express();

app.use(express.urlencoded({ }));
app.use(express.json());

app.use( userRoutes);
app.use('/hosts', hostRoutes);

//static files
app.use(express.static(path.join(rootDir, 'public')));


//default route
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

//start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});