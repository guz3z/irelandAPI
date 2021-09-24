//require the lib we will use
const express = require('express');
const cors = reequire('cors');
const port = process.env.PORT || 3000;

//create sever
const app = express();
app.use(express.json());
app.use()


//Beth example
    /*
let hummuses = [
    {id: 1, name: "classic", size: "150g" },
    {id: 2, name: "red pepper", size: "75g" },
]

app.get('/', (req,res)=> {
    res.json({message: 'Hello World!'})
})



// conditional logic for deciphering the request object
app.get('/', (req,res)=> {
    res.send('Hello World!')
})


app.get('/hummus', (req,res) => {
    res.json({all: hummuses})
})


app.get('/hummus/:hid/:time', (req,res) => {
    console.log(req.params);
    let requestedId = parseInt(req.params.hid);
    let selectedHummus = hummuses.find(h => h.id === requestedId)
    res.json(selectedHummus)
})


app.get('/hummus', (req,res) => {
    // get the posted data out of the request
    let newData = req.body
    let newId = hummuses.length + 1
    let newHummus = { id:newId, ...req.body}
    res.json({ message: `$(newHummus.size) $(newHummus.flavour) hummus successfully added`});
})

    */

app.listen(port, () => console.log(`Express departing now from http://localhost:${port}`))


module.exports = app;