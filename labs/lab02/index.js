import express from "express";
import lab_router from "./routers/lab_router.js"
const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`open site on: http://localhost:${PORT}`);
});

app.use('/lab', lab_router);
