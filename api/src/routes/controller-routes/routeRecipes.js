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
    let found=list.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()));
    return found;
}

//falta que no sea key sensitive
const getBDrecipes= async(name)=>{
    const list = await Recipe.findAll({
        where:{
            name:{[Op.substring]:name},
        },
        //nombre,dieta,imagen
        attributes:['name',],
    })
    return list;
}
const getAllRecipes=async(name)=>{
    // contralar errores, no entra el recipes
    if(!name){
        try{
            //https://run.mocky.io/v3/bfcacc70-8ccc-4f69-b5bb-5084d21725c4
            //const url= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${APIKEY}`)
            const url= await axios.get(`https://run.mocky.io/v3/bfcacc70-8ccc-4f69-b5bb-5084d21725c4`)
            let list=url.data.results.map(e=>{ return {id:e.id,name:e.title,image:e.image,diets:e.diets,score:e.healthScore}});
            return list;
        }catch(e){
            throw new Error(e.message)
        }
    }
    const apiList = await getAPIrecipes(name);
    const bdList= await getBDrecipes(name);
    const recipes=apiList.concat(bdList);
    if(!recipes[0]){
        throw new Error("no existe la receta con ese nombre");
    }
    return recipes;
}
router.get('/',async(req,res)=>{ 
    try{
        const {name} = req.query;
        res.status(200).json({res: await getAllRecipes(name)})
    }catch(e){
        res.status(404).json({ error: e.message })
    }
})

//-----------------------------------------------------------------------------------------------------------------------------------------//

const setBDrecipe= async(name,summary,instructions,score)=>{
    const newRecipe= await Recipe.create({name,summary,instructions,score})
    if(!newRecipe)throw new Error("no se pudo crear la receta")
    return "se creo con exito";
}

router.post('/',async (req,res)=>{
    try{
        const {name,summary,instructions,score}=req.body;
        //faltaria asociar las dietas del plato
        res.status(201).send(await setBDrecipe(name,summary,instructions,score))
    }catch(e){
        res.status(400).json({ error: e.message })
        
    }
    

})

//-----------------------------------------------------------------------------------------------------------------------------------------//

const getInfoAPI=async(id)=>{
    try{
        const url= await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&number=100&apiKey=${APIKEY}`)
        const {title,image,dishTypes,diets,healthScore,summary,instructions}= url.data;
        return{name:title,image,dishTypes,diets,score:healthScore,summary,instructions};
    }catch(e){
        return null;
    }
    
}
const getInfoBD=async(id)=>{
    try{
        const found = await Recipe.findByPk(id);
        return found;
    }catch(e){
        return null;
    }
    
}
const getRecipeInfo=async(id)=>{
        const existAPI=await getInfoAPI(id);
        if(existAPI)return existAPI
        const existBD=await getInfoBD(id);
        if(existBD)return existBD
        
        throw new Error("Fallo")  
}
router.get('/:id',async(req,res)=>{
    try{
        const id= req.params.id;
        res.send(await getRecipeInfo(id))
    }catch(e){
        res.status(404).json({ error: e.message})
    }
})



module.exports= router;