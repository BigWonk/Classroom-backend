import express from "express";
import subjectRoutes from "./routes/subject.js";
import cors from "cors";
import secuirtyMiddleware from "./middleware/security.js";
import {toNodeHandler} from "better-auth/node"
import { auth } from "./lib/auth.js";
const app = express();
const port = 8000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(express.json());

app.use(secuirtyMiddleware);
app.get("/", (req, res)=>
{
res.send("Mazna brat");

})
app.use("/api/subjects",subjectRoutes )








app.listen(port, () =>
{
    console.log(`Server started at http://localhost:${port}`);
})