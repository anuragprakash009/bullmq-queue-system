const Redis = require("ioredis");

const connection = new Redis({
  port: 6379, // Redis port
  host: "127.0.0.1", // Redis host
  db: 0, // Defaults to 0
  maxRetriesPerRequest: null,
});

module.exports = {
  connection,
};
