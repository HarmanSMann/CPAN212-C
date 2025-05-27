import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    // do something
    res.send("Hello to the lab router");
});

router.get("/name", (req, res) => {
    res.send("Harman");
});

router.get("/greeting", (req, res) => {
    res.send("Harman Mann my student number is N11111111");
});


router.get('/add/:x/:y', (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);

    res.send(`${x + y}`);
});

// lh:8000/calculate/2/2//
router.get('/calculate', (req, res) => {
    console.log(req.query);
    let x = parseFloat(req.query.x);
    let y = parseFloat(req.query.y);
    console.log(req.query.operator);

    switch (req.query.operator) {
        case "+": // + OR %2B
            res.send(`${x + y}`);
            break;

        case "-":
            res.send(`${x - y}`);
            break;

        case "*":
            res.send(`${x * y}`);
            break;

        case "/": // %2F
            if (y != 0) {
                return res.send(`${x / y}`);

            }
            res.send("your denominator cannot be 0");
            break;
        default:
            res.send("Invalid operator");
            break;
    }
});


export default router;