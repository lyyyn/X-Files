// Dependencies
const express = require('express');
const app = express();
const PORT = 3000;

require('./routes')(app);

// App Listen at the last
app.listen(PORT, ()=> {
    console.log(`X-Files : I am listening on port: ${PORT}`);
});
