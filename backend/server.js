import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Importing the middlewares routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

// Importing DATABASE CONNECTING FUNCTION
import connectToMongoDB from "./db/connectToMongoDB.js";

//server from socket.js
import { app, server, io } from "./socket/socket.js";

const PORT = process.env.PORT || 3000; // Corrected the typo here

const __dirname = path.resolve();

dotenv.config();

// MIDDLEWARES
app.use(express.json()); //-> to parse the incoming requests with JSON payloads (from req.body)  //-> this middleware will allow you to extract values from req. body
app.use(cookieParser()); //-> whenever going into any other route means like /api/auth or other i will be able access the cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// app.get("/", (req, res) => {
//   // Root route http://localhost:3000
//   res.send("Hello World!");
// });

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT} ...`);
  connectToMongoDB();
});
