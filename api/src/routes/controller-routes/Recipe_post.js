const {Recipe} = require('../../db');

const setBDrecipe= async(name,summary,instructions,score,diets)=>{
    if(!name||!summary||!instructions||!score)throw new Error("faltan datos")
    const newRecipe= await Recipe.create({name,summary,instructions,score})
    newRecipe.addDiets(diets);

    if(!newRecipe)throw new Error("no se pudo crear la receta")
    return "se creo con exito";
}
module.exports= setBDrecipe;