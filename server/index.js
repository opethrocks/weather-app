const fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json());

const cityMatch = require('./routes/api/citySearch');
app.use('/api/citySearch', cityMatch);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
