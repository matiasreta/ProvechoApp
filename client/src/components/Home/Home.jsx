import React from "react";
import { getAllRecipes } from "../../Redux/actions";
import {useSelector,useDispatch} from 'react-redux'
import { Recipe } from "../Recipe/Recipe";

export const Home = ()=>{

const recipesList = useSelector(state=>state.recipes);
const dispatch = useDispatch();

React.useEffect(()=>{
dispatch(getAllRecipes())
},[dispatch])

const [render,setRender]=React.useState([])
const limit=9;
const numbersOfPages= Math.round(recipesList.length/limit)
// (1) 0,9 ]     =>    (2) 9,18     =>      (3) 18,27

const actual=(number)=>{
 console.log(number)
 const newRender = recipesList.slice((limit*number)-limit,(limit*number))
 setRender(newRender)
}

const buttonList=(numbers)=>{
  const list=[];
  for(let index = numbers; 0 < index ; index--) {
    list.unshift(index)
  }
  return list;
}

  return(
    <div>
    <p>LISTA</p>
    <button>Next</button>
    <button>Previous</button>
    <p>{numbersOfPages} paginas</p>
    {buttonList(numbersOfPages).map(e=>{return( <button key={e} onClick={()=>actual(e)} >{e}</button> )})}


    
    {render.map((e)=>{return(
    <Recipe 
      name={e.name}
      image={e.image}
      score={e.score}
      id={e.id}
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