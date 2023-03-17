const express = require('express');
const router = express.Router();
// ---------------------------------------------

// Path to handle Static Files with in the router
// ---------------------------------------------
router.use(express.static('public'));

// Create presidentRoutes Server will break until presidentRoutes is created
// ---------------------------------------------
const presidentRoutes = require('./api/presidentRoutes');

// Create path that will point to jokeRoutes
// ---------------------------------------------
router.use('/president', presidentRoutes);

// Create Home Route
// ---------------------------------------------
router.get('/', (req, res)=>{
    res.render('pages/home', {
        title: 'Presidents Website!',
        name: 'President'
    });
});

// All Ordinals
// ------------------------------------------------------
router.get('/ordinal', async (req, res) => {
    const response = await fetch('https://api.sampleapis.com/presidents/presidents');
    const data = await response.json();
    res.render('pages/ordinal',
    { presidents: data });
});
// ------------------------------------------------------

// All President Names
// ------------------------------------------------------
router.get('/name', async (req, res) => {
    const response = await fetch('https://api.sampleapis.com/presidents/presidents');
    const data = await response.json();
    res.render('pages/name',
    { presidents: data });
});
// ------------------------------------------------------

// All Years in Office
// ------------------------------------------------------
router.get('/yearsInOffice', async (req, res) => {
    const response = await fetch('https://api.sampleapis.com/presidents/presidents');
    const data = await response.json();
    res.render('pages/yearsInOffice',
    { presidents: data });
});
// ------------------------------------------------------

// All Vice-Presidents
// ------------------------------------------------------
router.get('/vicePresidentsNames', async (req, res) => {
    const response = await fetch('https://api.sampleapis.com/presidents/presidents');
    const data = await response.json();
    res.render('pages/vicePresidentsNames',
    { presidents: data });
});
// ------------------------------------------------------

// Error Route
// ---------------------------------------------
router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end();
    } else {
        res.send('<h1>404 Nah Mane. This ain\'t where it\'s at!</h1>')
    }
})







module.exports = router;