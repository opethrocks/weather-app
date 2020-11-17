const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('/', (req, res) => {
  let city = req.body.data.city;
  let state = req.body.data.state;
  let country = req.body.data.country;

  //import city data from OWM
  let rawData = JSON.parse(fs.readFileSync('./cities.json', 'utf8'));

  //handle empty input with state or country selected error
  if (city === null || city === '') {
    return res.status(400).send({
      title: 'This is embarrasing..',
      content: 'You forgot to type a city name!'
    });
  }

  //handle not selected state or country error
  if (state === null && country === null) {
    return res.status(400).send({
      title: 'Whoops!',
      content: 'You should select a state or country first!'
    });
  }
  //loop over city data and find a match based on info from client
  let result = rawData.find((obj) => {
    if (obj.name === city && obj.state === state) {
      return obj;
    } else if (obj.name === city && obj.country === country) {
      return obj;
    }
  });

  if (result) {
    res.status(200).send(result);
  }
});

module.exports = router;
