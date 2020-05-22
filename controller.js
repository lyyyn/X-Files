const sightings = require('./models/sightings.json');

const listUniqState = () => {
    return [...new Set(sightings.map(item => item.state))];
};

const listUniqCity = () => { // logic to remove ?, remove empty, parse / as _
    return [...new Set(sightings.map(item => {
        if ((item.city !== '?') || (item.city !== '')) {
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
        return item.date.substring(0, spaceLoc).split('/').join('-');
    }))];
};

const listUniqShape = () => {
    return [...new Set(sightings.map(item => item.shape))];
};


module.exports = {
    displaySightings: (req, res) => {
        console.log('Get request from /, sent response.');
        res.render('view.ejs', {
            title: 'All Sighting Lists',
            allSightings: sightings
        });
    },
    index: (req, res) => {
        console.log('Get request from /, sent response.');
        res.render('index.ejs', {
            allStates: listUniqState().sort().splice(1),
            allCities: listUniqCity().sort().splice(1),
            allDates: listUniqDate().sort(),
            allShapes: listUniqShape().sort().splice(1)
        });
    },
    filter: (req, res) => {
        console.log('Get request from /filter, sent response.');
        const stateParams = req.query.state.toLowerCase();
        const cityParams = req.query.city.split('_').join('/').toLowerCase();
        const dateParams = req.query.date.toLowerCase();
        const shapeParams = req.query.shape.toLowerCase();

        let result = sightings.filter((element) => {
            return (element.state.toLowerCase() == stateParams || stateParams == '') &&
                (element.city.toLowerCase() == cityParams || cityParams == '') &&
                (element.shape.toLowerCase() == shapeParams || shapeParams == '') &&
                (element.date.includes(dateParams.split('-').join('/')) || dateParams == '')
        });

        res.render('view.ejs', {
            title: `Sighting Lists Search Results`,
            allSightings: result
        });
    }
};