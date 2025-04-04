const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

let orders = [
  { id: 1, status: "Pending", items: 5 },
  { id: 2, status: "Shipped", items: 3 },
  { id: 3, status: "Delivered", items: 7 },
];

io.on("connection", (socket) => {
  console.log("New client connected");

  // Send initial orders
  socket.emit("orderStatusUpdated", orders);

  // Update order status
  socket.on("updateOrderStatus", ({ orderId, status }) => {
    const order = orders.find((o) => o.id === orderId);
    if (order) {
      order.status = status;
      io.emit("orderStatusUpdated", orders);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5000, () => {
  console.log("WebSocket Server running on port 5000 🚀");
});
