const express =  require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send({message:`Hello ${req.query.name}`});
});

routes.post('/dev',(req,res)=>{
    console.log(req.body)
    res.send({ok:true});
});


module.exports = routes;
