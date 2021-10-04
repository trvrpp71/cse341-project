const routes = require('express').Router();

const teamRoutes = require('./teamRoutes');
const proveRoutes = require('./proveRoutes');


routes
    .use('/teamActivities', teamRoutes)
    //use the teamRoutes.js file to handle endpoints that start with team Activies
    .use('/proveActivities', proveRoutes)
    //use the proveRoutes.js file to handle endpoints that start with prove Activies
    .get('/', (req, res, next) => {
        res.render('pages/index', {title: 'Welcome to my CSE341 repo dude',path: '/'})
    })

    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
    })

module.exports = routes;
