require("./config/db.config");

const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

const morgan = require('morgan');
app.use(morgan('dev'));

const router = require("./config/routes.config");
app.use(router);

app.listen(3000, () => {
    console.log("VAAMOS!");
});
