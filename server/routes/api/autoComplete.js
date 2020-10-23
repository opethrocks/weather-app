const express = require('express');
const fs = require('fs');

const router = express.Router();

const rawData = JSON.parse(fs.readFileSync('./cities.json', 'utf8'));

router.get('/', (req, res) => {
  const searchString = req.query.q;
  const state = req.query.state;
  const country = req.query.country;

  if (state) {
    res.send(
      rawData.filter((obj) => {
        return obj.state === state && obj.name.includes(searchString);
      })
    );
  } else if (country) {
    res.send(
      rawData.filter((obj) => {
        return obj.country === country && obj.name.includes(searchString);
      })
    );
  }
});

module.exports = router;
