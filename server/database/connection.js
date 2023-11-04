const mongoose = require("mongoose");
const DB = process.env.DB_NAME;
mongoose
  .connect(DB, {})
  .then(() => {
    console.log("connection success");
  })
  .catch((err) => {
    console.log("error in database connection");
  });
