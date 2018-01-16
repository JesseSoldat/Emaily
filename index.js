const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User'); //User Model has to be defined before passport
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);


const app = express();
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.get('*', (req, res) => {
  res.send({'jlab': "rocks the house"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);