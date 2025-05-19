import express from "express";

const app = express();
app.use(express.json());
app.listen(8080, () => {
  console.log("server runing on 8080");
});

var temp = null;
app.post("/setData", (request, response) => {
  temp = request.body;
  response.sendStatus(200);
});

app.get("/getData", (request, response) => {
  response.json(temp);
});
