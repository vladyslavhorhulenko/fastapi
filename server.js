const express = require("express");

const app = express();

const config = require('./config/config.js');

const mongoose = require('mongoose');



app.listen(config.port || 3000, () => {
	mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
		if(err)
			console.log(`Successful listening on port ${config.port}, DB ERROR: ${err}`);
		else
		console.log(`Successful listening on port ${config.port}, DB CONNECTED`);
	});
});

module.exports = app;
