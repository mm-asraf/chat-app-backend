const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const rooms = ["general", "tech", "finance", "crypto"];
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const server = require("http").createServer(app);
const PORT = 3002;

app.use("/users", userRoutes);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => {
  console.log("server is running to port", PORT);
});

//PORT=5698
//MONGO_URI="mongodb+srv://chat:chat2001@cluster0.ndkujtw.mongodb.net/?retryWrites=true&w=majority"
