import React from "react";
import { getAllRecipes } from "../../Redux/actions";
import {useSelector,useDispatch} from 'react-redux'

export const Home = ()=>{

//const recipesList = useSelector(state=>state.recipes);
const dispatch = useDispatch();

React.useState(()=>{
dispatch(getAllRecipes())
},[dispatch])



  return(
    <div>
    <p>ESTO</p>
    {"agragar map"}

    </div>
  )
};

/*
{
    "id": 716426,
    "name": "Cauliflower,pBrown Rice, and Vegetable Fried Rice",
    "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    "diets": [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan"
    ]
}
*/