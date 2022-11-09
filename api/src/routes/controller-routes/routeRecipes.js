const { Router } = require('express');
const router = Router();
// const {Diet} = require('../db')
import axios from 'axios';



router.get('/platoFavorito',(req,res)=>{
    const name = req.query.name;
    // im waiting for "pasta"
    res.send("me gusta la " + name +" con mucho queso")
    
})


const getNames= async (name)=>{
    const url= (`https://api.spoonacular.com/recipes/complexSearch?query=${name}&number=10&apiKey=b0abb062cc4a434c82c3d4971fff0d77`)
    const list = await axios.get(url)
    return list
}


router.get('/recipes',async(req,res)=>{
    const name = req.query.name;
    res.send(name)
})


module.exports= router;