const express = require('express');

const server = express();
server.get('/',(req,res)=>{
    res.send("Hello Word");
})
server.listen(3333,()=>{
    console.log('Server is running');
});
