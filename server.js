const express = require('express');
const port = process.env.PORT || 3000;
const App = express();

App.listen(port, () => console.log(`Express departing now from http://localhost:${port}`))

App.get('/', (req,res)=> {
    res.send('Hello World!')})