const routes = require('express').Router();
const teamRoutes = require('./teamRoutes');

routes
    .use('/teamActivities', teamRoutes)

    .get('/', (req, res, next) => {
        res.render('pages/index', {title: 'Welcome to my CSE341 repo',path: '/'})
    })

    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
    })

module.exports = routes;
