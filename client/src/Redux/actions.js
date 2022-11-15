import axios from 'axios';
export const GET_RECIPES = 'GETRECIPES'
export const GET_INFORMATION = 'GET_INFORMATION'
export const SET_RECIPE = 'SET_RECIPE'
export const GET_DIETS = 'GET_DIETS'
export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME'


export const getAllRecipes=()=>{
    return function(dispatch){
        fetch(`http://localhost:3001/recipes/`)
        .then(response => response.json())
        .then(data=> dispatch({type:GET_RECIPES,payload:data.res}))
        .catch((e)=>console.log(e))
    }
}
export const getRecipesByName=(name)=>{
    return function(dispatch){
        fetch(`http://localhost:3001/recipes?name=${name}`)
        .then(response => response.json())
        .then(data=> dispatch({type:GET_RECIPES_BY_NAME,payload:data}))
        .catch((e)=>console.log(e))
    }
}
export const getInformation=(id)=>{
    return function(dispatch){
        fetch(`http://localhost:3001/recipes/${id}`)
        .then(response=>response.json())
        .then(data=>dispatch({type:GET_INFORMATION,payload:data}))
        .catch((e)=>console.log(e))
    }
}
export const setNewRecipe=(newRecipe)=>{
    return function(dispatch){
            axios.post('http://localhost:3001/recipes',newRecipe)
            .then(data=>dispatch({type:SET_RECIPE,payload:data.data.res}))
            .catch((e)=>dispatch({type:SET_RECIPE,payload:e.response.data.error}))
    }
}
export const getDiets = ()=>{
    return function(dispatch){
        fetch(`http://localhost:3001/diets`)
        .then(response => response.json())
        .then(data=> dispatch({type:GET_DIETS,payload:data.res}))
        .catch((e)=>console.log(e))
    }
}


