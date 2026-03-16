import express from "express";
import subjectsRouter from "./routes/subject";
import cors from "cors";
const app = express();
const port = 8000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(express.json());
app.get("/", (req, res)=>
{
res.send("Mazna brat");

})
app.use("/api/subjects",subjectsRouter )








app.listen(port, () =>
{
    console.log(`Server started at http://localhost:${port}`);
})