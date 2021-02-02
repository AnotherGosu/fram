const { createClient } = require("contentful");
require("dotenv").config();

const space = process.env.CONTENTFUL_SPACE;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space,
  accessToken,
});

module.exports = client;
