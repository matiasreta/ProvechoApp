import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getDiets} from '../../Redux/actions'
import { Recipe } from "../Recipe/Recipe";
import {HomeStyle} from './HomeStyle'
import {PaginateStyle} from './PaginateStyle'
import { FilterStyle } from "./FilterStyle";
import { TemplateStyle } from "./TemplateStyle";
////////////////////////////////////////////////////////////////
//limit=9    (1) 0,9     =>    (2) 9,18     =>      (3) 18,27 //
////////////////////////////////////////////////////////////////

export const Home = ()=>{

  const recipesList = useSelector(state=>state.recipes);
  const DietsList = useSelector(state=>state.diets);

  const dispatch = useDispatch();
  
  const [postion,setPostion]=React.useState(1)
  const [order,setOrder]=React.useState([{type:'name',value:"desactivado"},{type:'score',value:"desactivado"}]);
  const [dietsFilter,setFilter]=React.useState([])


  React.useEffect(()=>{
    dispatch(getDiets())
  },[dispatch,recipesList])
  const limit=9;
  const numbersOfPages= Math.ceil(recipesList?.length/limit)

  const currentPage=(number)=>{
    const newRender = orderedList(recipesList).slice((limit*number)-limit,(limit*number))
    return newRender;
  }

  const orderedList=(arr)=>{
  let ordered=arr;

    order.forEach((element) => {
      if(element.value==='mayor'){
        ordered = ordered.sort((fe,se)=>{
          return (fe[element.type]===se[element.type]?0:fe[element.type]>se[element.type]?1:-1)})
      }if(element.value==='menor') {
        ordered = ordered.sort((fe,se)=>{
          return (fe[element.type]===se[element.type]?0:fe[element.type]>se[element.type]?-1:1)})
      }
    });
    if(!dietsFilter[0])return ordered;

    dietsFilter.forEach((dietName) => {
      ordered = ordered.filter((e)=>(e.diets.includes(dietName)))
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

  const filter=(name)=>{
    if(!dietsFilter.includes(name))setFilter([...dietsFilter ,name])
  }
  const resetFilter=()=>{
    setFilter([])
  }
  return(
    <div>
      
    {recipesList? (<div>
    <PaginateStyle>
    {buttonList(numbersOfPages).map(e=>{return( <button key={e} onClick={()=>setPostion(e)} >{e}</button> )})}
    </PaginateStyle>
    <TemplateStyle>
      <FilterStyle>
      
        
        <div>
        <h4>Most viewed recipes</h4>
        <small>{recipesList.length} results, {postion} / {numbersOfPages} pages </small>
        <p>Alphabetical Order</p>
        <button name="name" onClick={(e)=>changeOrder(e,"mayor")} className="material-symbols-outlined">arrow_upward</button>
        <button name="name" onClick={(e)=>changeOrder(e,"menor")} className="material-symbols-outlined">arrow_downward</button>
        <button name="name" onClick={(e)=>changeOrder(e,"desactivado")} className="material-symbols-outlined">mobiledata_off</button>
        <p>Health Score Order</p>
        <button name="score" onClick={(e)=>changeOrder(e,"menor")} className="material-symbols-outlined">arrow_upward</button>
        <button name="score" onClick={(e)=>changeOrder(e,"mayor")} className="material-symbols-outlined">arrow_downward</button>
        <button name="score" onClick={(e)=>changeOrder(e,"desactivado")} className="material-symbols-outlined">mobiledata_off</button>
        
          {DietsList.map((e)=>{
            return(<button onClick={()=>filter(e.name)}
            className="diets" key={e.id}>{e.name}</button>)})
          }
          <button className="diets" onClick={()=>resetFilter()}>none</button>
        </div>
      
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
    </TemplateStyle>
    </div>):(null)}
    </div>
  )

};
