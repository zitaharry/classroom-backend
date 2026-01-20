import express from "express";
import cors from "cors";
import subjectsRouter from "./routes/subjects";
import usersRouter from "./routes/users";
import classesRouter from "./routes/classes";

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/subjects", subjectsRouter);
app.use("/api/users", usersRouter);
app.use("/api/classes", classesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Classroom API");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
