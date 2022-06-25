<<<<<<< HEAD
/** @format */

// Initialize express --
const express = require("express");
// Initialize HandleBars
const exphbs = require("express-handlebars");
// Init path so that public folder can be used
const path = require("path");
// ini routes
const routes = require("./controllers");
// Sequelize connect
const sequelize = require("./config/connection");
// setup cookie session code
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: "Secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const helpers = require("./utils/helpers");
const hbs = exphbs.create({helpers});
=======
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
>>>>>>> c3b6368cf16bf410df2de261d6111d0314e3ebaf

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
<<<<<<< HEAD
app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
=======
app.use(express.urlencoded({ extended: true }));

// turn on routes
>>>>>>> c3b6368cf16bf410df2de261d6111d0314e3ebaf
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
<<<<<<< HEAD
  app.listen(PORT, () =>
    console.log(`\n\n\nYour server is now started at ~~~~ ➡️  http://localhost:${PORT} 🚀🔥 ⬅️ ~~~~~`)
  );
  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");
=======
    app.listen(PORT, () => console.log('Now listening'));
>>>>>>> c3b6368cf16bf410df2de261d6111d0314e3ebaf
});
