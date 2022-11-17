require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.cors;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const ipv4Router = require("./routes/ipv4");
app.use("/ipv4", ipv4Router);

app.listen(process.env.PORT, () => console.log("Server Started"));
