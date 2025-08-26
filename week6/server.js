// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/add", (req, res) => {
//   const a = parseFloat(req.query.a);
//   const b = parseFloat(req.query.b);
//   if (isNaN(a) || isNaN(b)) {
//     return res.status(400).send("Invalid input");
//   }
//   const sum = a + b;
//   res.send(`The sum of ${a} and ${b} is: ${sum}`);
// });

// app.get("/", (req, res) => {
//   res.send("Calculator API is running!");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// module.exports = app;

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid input");
  }
  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Serving files from: ${path.join(__dirname, "public")}`);
  });
}

module.exports = app;
