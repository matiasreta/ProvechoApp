const { Router } = require('express');
const router = Router();
//-------------------------------------//
const {Recipe} = require('../../db');
const { Op } = require('sequelize');
//-------------------------------------//
require('dotenv').config();
const {APIKEY} = process.env;
//-------------------------------------//
const axios = require("axios");
//-------------------------------------//


const getAPIrecipes= async (name)=>{
    const url= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${APIKEY}`)
    let list=url.data.results.map(e=>{ return {id:e.id,name:e.title,image:e.image,diets:e.diets}});
    //let found=list.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()));
    return list;
}
const getBDrecipes= async(name)=>{
    const list = await Recipe.findAll({
        where:{
            name:{[Op.substring]:name},
        },
        attributes:['name',],
    })
    return list;
}
const getAllRecipes=async(name)=>{
    const apiList = await getAPIrecipes(name)
    const bdList= await getBDrecipes(name)
    const recipes=apiList.concat(bdList);
    if(!recipes){
        throw new Error("recipes does not exist");
    }
    return recipes;
    
}
router.get('/',async(req,res)=>{ 
    try{
        const {name} = req.query;
        res.status(200).send(await getAllRecipes(name))
    }catch(e){
        res.status(404).json({ error: e.message })
    }
})

//-----------------------------------------------------------------------------------------------------------------------------------------//

const setBDrecipe= async(name,resumen)=>{
    const newRecipe= await Recipe.create({name:name,resumen:resumen})
    if(!newRecipe)throw new Error("no se pudo crear la receta")
    return "se creo con exito";
}

router.post('/',async (req,res)=>{
    try{
        const {name,resumen}=req.body;
        res.status(201).send(await setBDrecipe(name,resumen))
    }catch(e){
        res.status(400).json({ error: e.message })
        
    }
    

})

//-----------------------------------------------------------------------------------------------------------------------------------------//

//const url= await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&number=50&apiKey=${APIKEY}`)
const getInfoID=async(id)=>{
    const url= await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&number=50&apiKey=${APIKEY}`)
    const {title,image,dishTypes,diets,healthScore,summary,instructions}= url.data;
    return{title,image,dishTypes,diets,healthScore,summary,instructions};
}
const getInfoBD=async(id)=>{
    const found = await Recipe.findbyPk(id);
    return found;
}
const getInfo=()=>{
    
}

router.get('/:id',async(req,res)=>{
    try{
        const id= req.params.id;
        res.send(await getInfoID(id))
    }catch(e){
        res.status(404).json({ error: e.message })  
    }
})



module.exports= router;