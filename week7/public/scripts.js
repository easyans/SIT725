// Connect to the server
const socket = io();

// Listen for the 'number' event from the server
socket.on("number", (msg) => {
  console.log("Random number from server:", msg);
  // Update the HTML element with the new number
  document.getElementById("number").innerText = msg;
});
