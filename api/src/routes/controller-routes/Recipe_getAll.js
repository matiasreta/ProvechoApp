/*
require('dotenv').config();
const {APIKEY} = process.env;
https://run.mocky.io/v3/bfcacc70-8ccc-4f69-b5bb-5084d21725c4
const url= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${APIKEY}`)
*/

const axios = require("axios");
const {Recipe,Diet} = require('../../db');

const apiReq=async()=>{
    const url= await axios.get(`https://run.mocky.io/v3/bfcacc70-8ccc-4f69-b5bb-5084d21725c4`)
    let list=url.data.results.map(e=>{ return {id:e.id,name:e.title,image:e.image,diets:e.diets,score:e.healthScore}});
    return list;

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

module.exports={apiReq,getAllRecipes};


