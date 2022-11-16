const { Router } = require('express');
const router = Router();
//-------------------------------------//
const {Recipe,Diet,have} = require('../../db');
const { Op } = require('sequelize');
//-------------------------------------//
require('dotenv').config();
const {APIKEY} = process.env;
//-------------------------------------//
const axios = require("axios");
//-------------------------------------//

//https://run.mocky.io/v3/bfcacc70-8ccc-4f69-b5bb-5084d21725c4
//const url= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${APIKEY}`)
const apiReq=async()=>{
    const url= await axios.get(`https://run.mocky.io/v3/bfcacc70-8ccc-4f69-b5bb-5084d21725c4`)
    let list=url.data.results.map(e=>{ return {id:e.id,name:e.title,image:e.image,diets:e.diets,score:e.healthScore}});
    return list;

}

const getAPIrecipesByName= async (name)=>{
    let list = await apiReq();
    let found=list.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()));
    return found;
}

//falta que no sea key sensitive
const getBDrecipesByName= async(name)=>{
    const list = await Recipe.findAll({
        where:{
            name:{[Op.substring]:name},
        },
        attributes:['id','name','score',],
        include:[{
            model:Diet,
            attributes:['name'],
            through: {
                attributes: []
                }
        }]

    })
    const newList=list.map(e=>{
       const arr =e.diets.map(j=>j.name)
        return {id:e.id,name:e.name,diets:arr,score:e.score};
    })

    return newList;
}
const getAllRecipesByName=async(name)=>{
    const apiList = await getAPIrecipesByName(name);
    const bdList = await getBDrecipesByName(name);
    const recipes = apiList.concat(bdList);
    if(!recipes[0]){
        throw new Error("no existe la receta con ese nombre");
    }
    return recipes;
}
const bdReq=async()=>{
    const list  = await Recipe.findAll({
        attributes:['id','name','score',],
            include:[{
            model:Diet,
            attributes:['name'],
            through: {
                attributes: []
                }
            }]
        })
    const newList=list.map(e=>{
            const arr =e.diets.map(j=>j.name)
            return {id:e.id,name:e.name,diets:arr,score:e.score};
         })
    return newList;
}

const getAllRecipes=async()=>{
        try{
        const apiList = await bdReq();
        const bdList = await apiReq();
        const recipes = apiList.concat(bdList);
        return recipes;
        }catch(e){
            throw new Error(e.message)
        }
}



router.get('/',async(req,res)=>{ 
    const {name} = req.query;
    try{
        if(!name){
        res.status(200).json({res: await getAllRecipes()})
        }else{
        res.status(200).json({res: await getAllRecipesByName(name)})
        }
    }catch(e){
        res.status(404).json({ error: e.message })
    }
})

//-----------------------------------------------------------------------------------------------------------------------------------------//

const setBDrecipe= async(name,summary,instructions,score,diets)=>{
    if(!name||!summary||!instructions||!score)throw new Error("faltan datos")
    const newRecipe= await Recipe.create({name,summary,instructions,score})
    newRecipe.addDiets(diets);

    if(!newRecipe)throw new Error("no se pudo crear la receta")
    return "se creo con exito";
}

router.post('/',async (req,res)=>{
    try{
        const {name,summary,instructions,score,diets}=req.body;
        res.status(201).json({res: await setBDrecipe(name,summary,instructions,score,diets)})
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
        (e.message)
        return null;
    } 
}
const getInfoBD=async(id)=>{
    try{
        const found = await Recipe.findByPk(id);
        return found;
    }catch(e){
        (e.message)
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