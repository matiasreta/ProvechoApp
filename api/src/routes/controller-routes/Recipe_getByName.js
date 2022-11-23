const {apiReq} = require('./Recipe_getAll')
const {Recipe,Diet} = require('../../db');
const { Op } = require('sequelize');


const getAPIrecipesByName= async (name)=>{
    let list = await apiReq();
    let found=list.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()));
    return found;
}

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
        return {id:e.id,name:e.name,diets:arr,score:e.score,};
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

module.exports=getAllRecipesByName;