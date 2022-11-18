import React from "react";
import {useSelector} from 'react-redux'
import { Recipe } from "../Recipe/Recipe";
import {HomeStyle} from './HomeStyle'
import {PaginateStyle} from './PaginateStyle'
import { FilterStyle } from "./FilterStyle";
////////////////////////////////////////////////////////////////
//limit=9    (1) 0,9     =>    (2) 9,18     =>      (3) 18,27
////////////////////////////////////////////////////////////////


export const Home = ()=>{

const recipesList = useSelector(state=>state.recipes);
const [postion,setPostion]=React.useState(1)
const [orderType,setOrderType] = React.useState('alphabet');
const [upDown,setUpDown]=React.useState(true);

React.useEffect(()=>{},[recipesList])

const limit=9;
const numbersOfPages= Math.ceil(recipesList.length/limit)

const currentPage=(number)=>{
  const newRender = order(recipesList).slice((limit*number)-limit,(limit*number))
  return newRender;
}

const order=(arr)=>{
  if(upDown){
    const newArr =arr.sort((e,o)=>e[orderType]>o[orderType]?1:-1)
    return newArr;
  }else{
    const newArr= arr.sort((e,o)=>e[orderType]>o[orderType]?-1:1)
    return newArr;
  }
}

const setOrder=(e,value)=>{
  setOrderType(e.target.name)
  setUpDown(value)
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

    <PaginateStyle>
    {buttonList(numbersOfPages).map(e=>{return( <button key={e} onClick={()=>setPostion(e)} >{e}</button> )})}
    </PaginateStyle>

    <FilterStyle>
    <p>alphabetical order</p>
    <button name="name" onClick={(e)=>setOrder(e,true)} >⬆️</button>
    <button name="name" onClick={(e)=>setOrder(e,false)}> ⬇️</button>
    <p>order by health score</p>
    <button name="score" onClick={(e)=>setOrder(e,false)}>⬆️</button>
    <button name="score" onClick={(e)=>setOrder(e,true)} >⬇️</button>
    <p>lista de dietas, onclick filtrado</p>
    </FilterStyle>
    

    <HomeStyle>
    {currentPage(postion).map((e)=>{return(
      <Recipe 
        name={e.name} image={e.image} 
        score={e.score} id={e.id}
        key={e.id} diets={e.diets}
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
    ],
    "score":100
}
*/