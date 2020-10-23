const express = require('express');
const fs = require('fs');

const router = express.Router();

const rawData = JSON.parse(fs.readFileSync('./cities.json', 'utf8'));

router.get('/', (req, res) => {
  const lat = +req.query.lat;
  let lon = +req.query.lon;

  res.send(
    rawData.filter((obj) => {
      if (
        obj.coord.lat == Math.floor(lat) &&
        obj.coord.lon == Math.floor(lon)
      ) {
        return obj;
      }
    })
  );
});

module.exports = router;
