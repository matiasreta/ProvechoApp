import React from "react";
import { getAllRecipes } from "../../Redux/actions";
import {useSelector,useDispatch} from 'react-redux'
import { Recipe } from "../Recipe/Recipe";
import {HomeStyle} from './HomeStyle'
////////////////////////////////////////////////////////////////
//limit=9    (1) 0,9     =>    (2) 9,18     =>      (3) 18,27
////////////////////////////////////////////////////////////////


export const Home = ()=>{
  
const recipesList = useSelector(state=>state.recipes);
const [postion,setPostion]=React.useState(1)

const dispatch = useDispatch();
React.useEffect(()=>{
dispatch(getAllRecipes())
},[dispatch])


const limit=9;
const numbersOfPages= Math.ceil(recipesList.length/limit)
const currentPage=(number)=>{
  const newRender = recipesList.slice((limit*number)-limit,(limit*number))
  return newRender;
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
    <p>{postion}</p>
    <p>{numbersOfPages} paginas</p>
    {buttonList(numbersOfPages).map(e=>{return( <button key={e} onClick={()=>setPostion(e)} >{e}</button> )})}
    <HomeStyle>
    {currentPage(postion).map((e)=>{return(
      <Recipe 
        name={e.name} image={e.image} 
        score={e.score} id={e.id}
        key={e.id}
      />)})
    }
    </HomeStyle>
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