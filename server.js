// Dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('./routes')(app);

// App Listen at the last
app.listen(port, ()=> {
    console.log(`X-Files : I am listening on port: ${port}`);
});
