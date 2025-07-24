const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));


app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid numbers' });
  }
  res.json({ result: num1 + num2 });
});

// This is the port that will connect us with the localhost:3000 in the web browser.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 