const func = require('./controller');

module.exports = (app) => {
    app.get('/', func.displaySightings);
    app.get('/help', func.displayHelp);
    app.get('/filterByState/:state', func.filterByState);
    app.get('/filterByCity/:city', func.filterByCity);
    app.get('/filterByDate/:date', func.filterByDate);
    app.get('/filterByShape/:shape', func.filterByShape);
};
