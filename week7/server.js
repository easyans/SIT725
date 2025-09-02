const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);

const io = socketIo(server);

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// This line of code Handles the Socket.IO connections
io.on("connection", (socket) => {
  console.log("A user new connected");

  socket.on("disconnect", () => {
    console.log("User disconnected!");
  });

  setInterval(() => {
    const randomNum = Math.floor(Math.random() * 10); // Generate random number between 0-9
    socket.emit("number", randomNum);
  }, 1000);
});

//The server code.
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
