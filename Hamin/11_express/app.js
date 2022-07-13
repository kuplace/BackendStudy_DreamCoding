import express from "express";
const app = express();

app.get("/hello", (req, res, next) => {
  res.send("hihi");
});
app.listen(8080);
