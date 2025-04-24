const express = require("express");
const app = express();

app.set('view engine', 'ejs')
app.use("/photos",express.static('photos'));
app.use(express.static('./public'))
const Router  = require('./routes/routes');
app.use("/", Router);

app.listen(8888);