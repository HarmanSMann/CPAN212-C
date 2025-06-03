import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

// middleware here
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// basic routing here
app.get("/", (req, res) => {
    res.json({ message: "hello from the server" });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
    res.status(404).send("404 Page Not Found");
});
