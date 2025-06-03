import express from "express";
import cors from "cors"; // npm i cors, import, attach to app

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

app.get("/data", (req, res) => {
    const data = {
        user01: {
            name: "Harman Mann",
            age: 27,
            email: "Harman.Mann@humber.ca",
            height: 6,
        },
    };
    res.json(data);
});

app.post("/register", (req, res) => {
    // do something
    console.log(req.body);
    // for today, thats it, we got the information

    res.json("Registration successful");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
    res.status(404).send("404 Page Not Found");
});
