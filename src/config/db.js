const mongoose = require("mongoose");




mongoose.set('strict',false)
mongoose.set('strictQuery',false)
mongoose.set('strictPopulate',false)

const connectDB = mongoose
  .connect( process.env.MONGO_URL)
  .then(async() => {
    console.log("Conectado a la base de datos de mongo");
  })
  .catch((err) => {
    console.log("Error conectado a la db:", err);
    process.exit(1)
  });
  module.exports = {
connectDB
  };
  