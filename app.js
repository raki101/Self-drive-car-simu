const express = require('express');
const app = express();

app.use(express.static('public'));
    

app.listen(1000,()=>{
    console.log("port 1000");
})

