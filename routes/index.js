// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// router.get('/', (req, res) => {
//     res.render('index', { name: null, gender: null, nationality: null, error: null });
// });

// router.post('/predict', async (req, res) => {
//     const name = req.body.name;

//     try {
//         const genderResponse = await axios.get(`https://api.genderize.io?name=${name}`);
//         const nationalityResponse = await axios.get(`https://api.nationalize.io?name=${name}`);
    
//         const gender = genderResponse.data.gender;
//         const nationality = nationalityResponse.data.country.map(c => c.country_id).join(', ');
    
//         res.render('index', { name, gender, nationality, error: null });
//     } catch (error) {
//         res.render('index', { name: null, gender: null, nationality: null, error: 'Error fetching data' });
//     }
// });

// module.exports = router;

const express = require('express');
const axios = require('axios');
const path = require('path');
const router = express.Router();

// Require the country mapping file
const countryMapping = require(path.join(__dirname, '..', 'public', 'js', 'countryMapping.js'));

router.get('/', (req, res) => {
    res.render('index', { name: null, gender: null, nationality: null, countries: null, error: null });
});

router.post('/predict', async (req, res) => {
    const name = req.body.name;

    try {
        const genderResponse = await axios.get(`https://api.genderize.io?name=${name}`);
        const nationalityResponse = await axios.get(`https://api.nationalize.io?name=${name}`);
    
        const gender = genderResponse.data.gender;
        const countries = nationalityResponse.data.country.map(c => ({
            name: countryMapping[c.country_id] || c.country_id,
            probability: (c.probability * 100).toFixed(2) // Convert to percentage and format
        }));
        const nationality = countries.map(c => c.name).join(', ');
    
        res.render('index', { name, gender, nationality, countries, error: null });
    } catch (error) {
        res.render('index', { name: null, gender: null, nationality: null, countries: null, error: 'Error fetching data' });
    }
});

module.exports = router;