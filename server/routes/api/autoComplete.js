const express = require('express');
const fs = require('fs');
const { serialize } = require('v8');

const router = express.Router();

const rawData = JSON.parse(fs.readFileSync('./cities.json', 'utf8'));

router.get('/', (req, res) => {
  const searchString = req.query.q;
  const state = req.query.state;
  const country = req.query.country;

  if (state === undefined && country === undefined) {
    res.status(400).send({
      title: 'Hold on Mr. Flash!',
      content: 'You have to select a state or country first!'
    });
  }

  let match = rawData.filter((obj) => {
    if (obj.state === state && obj.name.includes(searchString)) {
      return obj;
    } else if (obj.country === country && obj.name.includes(searchString)) {
      return obj;
    }
  });

  if (match.length > 0) {
    res.status(200).send(match);
  } else {
    res.status(400).send({
      title: "That's weird",
      content: "I've never heard of that city"
    });
  }
});

module.exports = router;
