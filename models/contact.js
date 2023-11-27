const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://kasperskyi:H34Lsd4nD@db-contacts.cqq0pwi.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
    .then(() => console.log("Database conected success"))
    .catch(() => console.log(error.message));