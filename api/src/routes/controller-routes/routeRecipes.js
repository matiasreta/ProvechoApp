const { Router } = require('express');
const router = Router();
//-----------------------------------------------//
const axios = require("axios");
//-----------------------------------------------//
const {Recipe} = require('../../db');
const { Op } = require('sequelize');
//-----------------------------------------------//
router.get('/platoFavorito',(req,res)=>{
    const name = req.query.name;
    // im waiting for "pasta"
    res.send("me gusta la " + name +" con mucho queso")
    
})

const getAPIrecipes= async (name)=>{
    const url= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&number=10&apiKey=b0abb062cc4a434c82c3d4971fff0d77`)
    let list=url.data.results.map(e=>{ return {id:e.id,name:e.title,image:e.image}});
    return list;
}
const getBDrecipes= async(name)=>{
    const list = await Recipe.findAll({
        where:{name:name}
    })
    return list;
}

router.get('/recipes',async(req,res)=>{
    const name = req.query.name;
    res.send(await getAPIrecipes(name))
})

// where:{
//     name:{[Op.substring]:name}
// }

module.exports= router;