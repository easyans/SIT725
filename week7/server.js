// Import required modules
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app); // Create HTTP server from the Express app

// Create Socket.IO instance by passing the HTTP server
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route for the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("A user connected"); // Log when a user connects

  // Handle the 'disconnect' event
  socket.on("disconnect", () => {
    console.log("User disconnected"); // Log when a user disconnects
  });

  // Emit a random number to this client every second
  setInterval(() => {
    const randomNum = Math.floor(Math.random() * 10); // Generate random number between 0-9
    socket.emit("number", randomNum); // Send the number on the 'number' event
  }, 1000);
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
