import React from "react";
import { getAllRecipes } from "../../Redux/actions";
import {useSelector,useDispatch} from 'react-redux'
import { Recipe } from "../Recipe/Recipe";

export const Home = ()=>{

const recipesList = useSelector(state=>state.recipes);
const dispatch = useDispatch();

React.useState(()=>{
dispatch(getAllRecipes())
},[dispatch])

  return(
    <div>
    <p>ESTO</p>
    {recipesList[0] && recipesList.map((e)=>{return(
    <Recipe 
      name={e.name}
      image={e.image}
      score={e.score}
      key={e.id}/>
      )})
    }
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