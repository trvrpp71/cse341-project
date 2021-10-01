const express = require('express');
const proveRoutes = express.Router();

const app = express();

const pr02Route = require('./PR02/pr02');
const pr02aRoute = require('./PR02/pr02a');
app.use('/pr02', pr02Route);
app.use('/pr02a', pr02aRoute);


proveRoutes.use('/01', require('./PR01/test01'));
proveRoutes.use('/02', require('./PR02/pr02'));
proveRoutes.get('/', (req, res, next) => {
        res.render('./pages/proveActivities', {
          title: 'Prove Activities',
          path: '/proveActivities'
        });
    });


module.exports = proveRoutes;
