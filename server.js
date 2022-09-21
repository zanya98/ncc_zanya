const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static("C:/Users/zanya/OneDrive/Desktop/NCC_JS_Class"));

app.get("/", (req, res) => {
  res.sendFile("C:/Users/zanya/OneDrive/Desktop/NCC_JS_Class" + "/index.html");
});