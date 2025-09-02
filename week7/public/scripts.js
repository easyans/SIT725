const socket = io();

socket.on("number", (msg) => {
  console.log("Random number from server:", msg);
  document.getElementById("number").innerText = msg;
});
