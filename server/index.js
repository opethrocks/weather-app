const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const cityMatch = require('./routes/api/citySearch');
app.use('/api/citySearch', cityMatch);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public'));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
