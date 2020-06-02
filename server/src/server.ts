import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de users");

  response.json({message: "Hello World Brasil"});
});

app.listen(3333);
