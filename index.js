const express = require('express');
const app = express();
const PORT= 8080;
app.use(express.json());

// http://localhost:8080

app.post('/name', (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    res.json({
        fullname:`${first_name} ${last_name}`
    })
})

let pingCounter = 0;

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.post('/ping/increment', (req, res) => {
    let add = 1;
    if (req.body.value) {
        add = req.body.value;
    }
     pingCounter = pingCounter + add;
     res.send(`${pingCounter}`)
})

app.post('/ping/decrement', (req, res) => {
    let subtract = 1;
    if (req.body.value) {
        subtract = req.body.value;
    }

    if (pingCounter > 0) {
        pingCounter = pingCounter + subtract;
    }
    res.send(`${pingCounter}`)
})

app.get('/ping/value', (req, res) => {
    res.json({value: pingCounter});
})

app.get('*', (req, res) => {
    res.send('404 not found')
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT} . . .`)
})