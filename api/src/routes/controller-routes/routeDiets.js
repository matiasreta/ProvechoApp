const { Router } = require('express');
const router = Router();
// const {Diet} = require('../db')


router.get('/diet',(req,res)=>{
    res.send("dieta")
})


module.exports= router;