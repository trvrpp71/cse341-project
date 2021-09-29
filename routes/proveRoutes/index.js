const proveRoutes = require('express').Router();

proveRoutes
    .use('/01', require('./pr01'))
    .use('/02', require('./pr02'))
    .use('/03', require('./pr03'))
    .use('/04', require('./pr04'))
    .get('/', (req, res, next) => {
        res.render('./pages/proveActivities', {
          title: 'Prove Activities',
          path: '/proveActivities'
        });
    });


module.exports = proveRoutes;
