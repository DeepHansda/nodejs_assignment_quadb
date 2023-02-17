const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const URI = "mongodb://0.0.0.0:27017/quadb";
// process.env.MONGO_URI || 
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connection = () => {
  mongoose
    .connect(URI, options)
    .then((res) => {
      console.log("mongodb connected!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connection;
