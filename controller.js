const sightings = require('./models/sightings.json');

const displaySightings = (req, res) => {
    console.log('Get request from /, sent response.');
    res.render('list.ejs', {
        title: 'All Sighting Lists',
        allSightings: sightings
    });
};

const listUniqState = () => {
    return [...new Set(sightings.map(item => item.state))];
};

const listUniqCity = () => { // need logic to remove ?, contain /
    return [...new Set(sightings.map(item => {
        if (item.city !== '?') {
            if (item.city.includes('/')) {
                return item.city.split('/').join('_');
            }
            else {
                return item.city;
            }
        }
    }))];
};

const listUniqDate = () => { //need to remove the time
    return [...new Set(sightings.map(item => {
        const spaceLoc = item.date.indexOf(' ');
        return item.date.substring(0,spaceLoc).split('/').join('-');
    }))];
};

const listUniqShape = () => {
    return [...new Set(sightings.map(item => item.shape))];
};

const displayHelp = (req, res) => {
    console.log('Get request from /, sent response.');
    res.render('help.ejs', {
        allStates: listUniqState().sort().splice(1),
        allCities: listUniqCity().sort().splice(1),
        allDates: listUniqDate().sort(),
        allShapes: listUniqShape().sort().splice(1)
    });
};

const filterByState = (req, res) => {
    console.log('Get request from /filterByState, sent response.');
    const stateParams = req.params.state;
    let result = sightings.filter((element) => {
        return element.state === stateParams;
    });
    res.render('list.ejs', {
        title: `Sighting Lists in ${stateParams}`,
        allSightings: result
    });
};

const filterByCity = (req, res) => {
    console.log('Get request from /filterByCity, sent response.');
    let cityParams = req.params.city.split('_').join('/');
    
    let result = sightings.filter((element) => element.city === cityParams);
    res.render('list.ejs', {
        title: `Sighting Lists in ${cityParams}`,
        allSightings: result
    });
};

const filterByDate = (req, res) => {
    console.log('Get request from /filterByDate, sent response.');
    const dateParams = req.params.date;
    console.log(dateParams);
    console.log(dateParams.split('-').join('/'));

    let result = sightings.filter((element) => element.date.includes(dateParams.split('-').join('/')));
    res.render('list.ejs', {
        title: `Sighting Lists on ${dateParams}`,
        allSightings: result
    });
};

const filterByShape = (req, res) => {
    console.log('Get request from /filterByShape, sent response.');
    const shapeParams = req.params.shape;
    let result = sightings.filter((element) => element.shape === shapeParams);
    res.render('list.ejs', {
        title: `Sighting Lists of object with a shape like ${shapeParams}`,
        allSightings: result
    });
};

module.exports = {
    displaySightings,
    displayHelp,
    filterByState,
    filterByCity,
    filterByDate,
    filterByShape
};