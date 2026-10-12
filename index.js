const express = require("express");

const app = express();

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log("Server Running on PORT :", PORT);
});

app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Backend Server Running.",
    data: "",
  });
});
