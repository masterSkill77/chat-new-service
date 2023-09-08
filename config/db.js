require("dotenv").config();
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = process.env.MONGO_URL;

// Wait for database to connect, logging an error if there is a problem
exports.module = main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
