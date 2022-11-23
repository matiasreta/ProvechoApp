const {Recipe,} = require('../../db');
require('dotenv').config();
const {APIKEY} = process.env;
const axios = require("axios");

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

module.exports = getRecipeInfo;