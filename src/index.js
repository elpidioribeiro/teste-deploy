const express = require('express');
require('dotenv').config()

const app = express();

app.use(express.json());

app.get('/' , async(req, res) => {
    return res.json('API OK');
} )

app.listen(process.env.PORT || 3000 , ()=> {
console.log(process.env.PORT)
});
