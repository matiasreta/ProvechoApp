const { Router } = require('express');
const router = Router();


const getRecipeInfo = require('./Recipe_getByID')
const setBDrecipe = require('./Recipe_post')
const {apiReq,getAllRecipes} = require('./Recipe_getAll')
const getAllRecipesByName = require('./Recipe_getByName')


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


router.post('/',async (req,res)=>{
    try{
        const {name,summary,instructions,score,diets}=req.body;
        res.status(201).json({res: await setBDrecipe(name,summary,instructions,score,diets)})
    }catch(e){
        res.status(400).json({ error: e.message })
        
    }
})


router.get('/:id',async(req,res)=>{
    try{
        const id= req.params.id;
        res.send(await getRecipeInfo(id))
    }catch(e){
        res.status(404).json({ error: e.message})
    }
})


module.exports=router;