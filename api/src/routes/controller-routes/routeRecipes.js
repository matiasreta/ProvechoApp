const { Router } = require('express');
const router = Router();
//-----------------------------------------------//
const axios = require("axios");
//-----------------------------------------------//
const {Recipe} = require('../../db');
const { Op } = require('sequelize');
//-----------------------------------------------//

const getAPIrecipes= async (name)=>{
    const url= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&number=10&apiKey=b0abb062cc4a434c82c3d4971fff0d77`)
    let list=url.data.results.map(e=>{ return {id:e.id,name:e.title,image:e.image}});
    return list;
}
const getBDrecipes= async(name)=>{
    const list = await Recipe.findAll({
        where:{
            name:{[Op.substring]:name}
        }
    })
    return list;
}
const getAllRecipes=async(name)=>{
    const list = await getAPIrecipes(name)
    const listTwo= await getBDrecipes(name)
    return list.concat(listTwo);

}
router.get('/',async(req,res)=>{ 
    const {name} = req.query;
    res.send(await getAllRecipes(name))
})

//---------------------------------------------------------------------------------//

const setBDrecipe= async(name,resumen)=>{
    const newRecipe= await Recipe.create({name:name,resumen:resumen})
    return "secreo";
}

router.post('/',async (req,res)=>{
    const {name,resumen}=req.body;
    res.send(await setBDrecipe(name,resumen))

})

//---------------------------------------------------------------------------------//
router.get('/:id',(req,res)=>{
    const id= req.params.id;
    res.send(id)
})



module.exports= router;