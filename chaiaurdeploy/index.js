const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get('/twitter',(req,res)=>{
    res.send('shiv.pencia98298')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at shiv.com</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>youtube.com</h2>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
