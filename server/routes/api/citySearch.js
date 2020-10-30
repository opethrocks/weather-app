const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('/', (req, res) => {
  let city = req.body.data.city;
  let state = req.body.data.state;
  let country = req.body.data.country;
  let rawData = JSON.parse(fs.readFileSync('./cities.json', 'utf8'));

  if (city === null) {
    return res.status(400).send('Dont forget to type a city name!');
  }
  if (state === null && country === null) {
    return res.status(400).send('Dont forget to choose a state or country!');
  }

  let result = rawData.find((obj) => {
    if (obj.name === city && obj.state === state) {
      return obj;
    } else if (obj.name === city && obj.country === country) {
      return obj;
    }
  });

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send('City not found!');
  }
});

module.exports = router;
