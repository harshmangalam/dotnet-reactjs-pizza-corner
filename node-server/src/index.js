const express = require("express")
const routes = require("./routes")
const app = express();

app.use(express.json());
app.use("/api",routes)

app.listen(4000,()=>console.log("listening on port 4000"));