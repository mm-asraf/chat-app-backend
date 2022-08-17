const express = require("express");
const app = express();

const rooms = ["general", "tech", "finance", "crypto"];
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json);

require("./connection");

const server = require("http").createServer(app);
const PORT = 5001;

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
