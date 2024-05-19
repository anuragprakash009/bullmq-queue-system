const { addData } = require("./producer");

const express = require("express");
const app = express();

app.use(express.json());
app.post("/add", async (req, res) => {
  await addData(req.body.data);
  res.send({
    message: "Added to queue",
  });
});

app.listen(3000, () => {
  console.log(`Server started`);
});
