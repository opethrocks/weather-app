const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('/', (req, res) => {
  let city = req.body.data.city;
  let state = req.body.data.state;
  let country = req.body.data.country;
  let rawData = JSON.parse(fs.readFileSync('./cities.json', 'utf8'));

  if (!req.body.data) {
    return res.status(400).json({
      status: 'error',
      error: 'req body cannot be empty'
    });
  }

  let result = rawData.filter((obj) => {
    if (obj.name === city && obj.state === state) {
      return obj;
    } else if (obj.name === city && obj.country === country) {
      return obj;
    }
  });

  if (result) {
    res.status(200).json({
      status: 'success',
      data: result
    });
  } else {
    res.status(500).send('City not found!');
  }
});

module.exports = router;
