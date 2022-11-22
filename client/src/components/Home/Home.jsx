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
  const [order,setOrder]=React.useState([{type:'name',value:"desactivado"},{type:'score',value:"desactivado"}]);


  React.useEffect(()=>{},[recipesList])
  const limit=9;
  const numbersOfPages= Math.ceil(recipesList.length/limit)

  const currentPage=(number)=>{
    const newRender = orderedList(recipesList).slice((limit*number)-limit,(limit*number))
    return newRender;
  }

  const orderedList=(arr)=>{
  let ordered=arr;
  // 4 posibilidades de ordenado, y pueden ser mas...
    order.forEach((element) => {
      if(element.value==='mayor'){
        ordered = ordered.sort((fe,se)=>{
          return (fe[element.type]===se[element.type]?0:fe[element.type]>se[element.type]?1:-1)})
      }if(element.value==='menor') {
        ordered = ordered.sort((fe,se)=>{
          return (fe[element.type]===se[element.type]?0:fe[element.type]>se[element.type]?-1:1)})
      }
    });
    return ordered;
  }

const changeOrder=(event,value)=>{
  let newOrder=[]
  order.forEach(element => {
    if(element.type===event.target.name){
      newOrder.push({type:event.target.name,value:value})
    }else{
      newOrder.push(element)
    }
  });
  setOrder(newOrder)
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
      {console.log(order)}
    <PaginateStyle>
    {buttonList(numbersOfPages).map(e=>{return( <button key={e} onClick={()=>setPostion(e)} >{e}</button> )})}
    </PaginateStyle>

    <FilterStyle>
    <h3>alphabetical order</h3>
    <button name="name" onClick={(e)=>changeOrder(e,"mayor")} className="material-symbols-outlined">arrow_upward</button>
    <button name="name" onClick={(e)=>changeOrder(e,"menor")} className="material-symbols-outlined">arrow_downward</button>
    <button name="name" onClick={(e)=>changeOrder(e,"desactivado")} className="material-symbols-outlined">mobiledata_off</button>
    <h3>order by health score</h3>
    <button name="score" onClick={(e)=>changeOrder(e,"menor")} className="material-symbols-outlined">arrow_upward</button>
    <button name="score" onClick={(e)=>changeOrder(e,"mayor")} className="material-symbols-outlined">arrow_downward</button>
    <button name="score" onClick={(e)=>changeOrder(e,"desactivado")} className="material-symbols-outlined">mobiledata_off</button>
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