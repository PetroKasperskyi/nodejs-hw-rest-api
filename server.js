const app = require("./app");
const mongoose = require("mongoose");

// const { DB_URI, PORT = 3000 } = process.env;
const DB_HOST = "mongodb+srv://kasperskyi:H34Lsd4nD@db-contacts.cqq0pwi.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);

    console.info("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
