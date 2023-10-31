const express = require("express");
const app = express()
const cors = require("cors");
const Data = require("./data");
const port = 3005;

app.use(cors({
    origin: "*"

}))

app.get("/", (req, res) => {
    res.send("Hello Vimal How are You Today")
})

app.get("/data", (req, res) => {
    res.send(Data)
    console.log(Data);
})


app.listen(port, () => {
    console.log(`server is live on ${port}`);
})