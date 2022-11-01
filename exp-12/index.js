const express = require("express");
const path = require('path')

const app = express();

app.use("/static", express.static(path.join(__dirname, 'static')))

app.get("/", (req, res)=>{
	res.send("welcome to Home page");
})

app.get("/image", (req, res)=>{
	res.sendFile(path.join(__dirname, "static", "user.jpg"));
})

app.listen(3000, ()=>{
	console.log('Server running on port 3000')
})
