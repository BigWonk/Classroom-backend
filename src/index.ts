import express from "express";
import subjectRoutes from "./routes/subject.js";
import cors from "cors";
import secuirtyMiddleware from "./middleware/security.js";
import usersRouter from "./routes/users.js"
import {toNodeHandler} from "better-auth/node"
import { auth } from "./lib/auth.js";
import classesRouter from "./routes/classes.js"
const app = express();
const port = 8000;

app.use(cors({
    origin: 
    process.env.FRONTEND_URL,
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
app.use("/api/users", usersRouter)
app.use("/api/classes", classesRouter)








app.listen(port, () =>
{
    console.log(`Server started at http://localhost:${port}`);
})