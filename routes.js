const func = require('./controller');

module.exports = (app) => {
    app.get('/', func.index);
    app.get('/all', func.displaySightings);
    app.get('/filter', func.filter);
};
