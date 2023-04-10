const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const server = app.listen(() => console.log(`Listening on port ${PORT}`));
