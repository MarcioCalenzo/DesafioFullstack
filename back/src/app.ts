import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/session.routes";
import contactRoutes from "./routes/contacts.routes";

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/contacts", contactRoutes);

export default app;
