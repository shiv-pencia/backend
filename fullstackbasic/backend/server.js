import express from "express";
const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id : 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id : 2,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id : 3,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id : 4,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id : 5,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id : 6,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id : 7,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id : 8,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id : 9,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id : 10,
            title: 'A joke',
            content: 'This is a joke'
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
