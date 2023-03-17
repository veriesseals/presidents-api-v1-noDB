const express = require('express');
const server = express();
const router = require('./routes/router')
const PORT = process.env.PORT || 3000;
// -------------------------------------------------------

// Set View Engine so the server knows to use ejs
// ---------------------------------------------------
server.set('view engine', 'ejs');

// Server will break on this step (middleware error) We are importing the router here but it has not been exported at this point.
server.use('/', router);


// Server Listener
server.listen(PORT, ()=> console.log(`PORT ${PORT} is back jack!`))