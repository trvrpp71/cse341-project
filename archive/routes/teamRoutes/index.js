const express = require('express');
const teamRoutes = express.Router();

teamRoutes
    .use('/01', require('./ta01rt'))
    .use('/02', require('./ta02rt'))
    .use('/03', require('./ta03'))
    .use('/04', require('./ta04'))
    .get('/', (req, res, next) => {
        res.render('./pages/teamActivities', {
          title: 'Team Activities',
          path: '/teamActivities'
        });
    });


module.exports = teamRoutes;
