const express = require("express");
const connection = require("./src/db/connection");
const callAPI  = require("./src/utils/parser");
const app = express();
const PORT = process.env.PORT || 3400;


// **** initializing database
connection()
// **** initializing database

setInterval(()=>callAPI(),60000)





app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running!",
  });
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
