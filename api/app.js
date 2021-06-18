

const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const morgan = require('morgan');
const path = require('path');
const db = require('./models');
const passport = require('./middlewares/authentication');
const app = express();
const cloudinary = require('cloudinary').v2
const PORT = process.env.PORT || 8080;


// this lets us parse 'application/json' content in http requests
app.use(bodyParser.json())

// setup passport and session cookies
app.use(expressSession({ 
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: false ,
  cookie:{
maxAge:10000000
  }
}));
app.use(passport.initialize());
app.use(passport.session());

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers'));

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false});

//configure cloudinary with our particular cloud's details.
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET, 
});
// start up the server
app.listen(PORT, () => console.log(`Listening on ${PORT}`));