import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import path from 'path';

const users = require('./routes/api/users.js');
const profile = require('./routes/api/profile.js');
const calculation = require('./routes/api/calculation');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys.js').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('Mongoose connected to MongoDB'))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/calculation', calculation);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});