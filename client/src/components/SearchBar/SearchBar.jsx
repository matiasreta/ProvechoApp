import React from 'react'
import { SearchBarStyle } from './SearchBarStyle'
import { getAllRecipes,getRecipesByName } from "../../Redux/actions";
import {useDispatch} from 'react-redux'

export const SearchBar =()=>{

const dispatch = useDispatch();
React.useEffect(()=>{
dispatch(getAllRecipes())
},[dispatch])

const [text,setText]=React.useState("");

const eventHandler=(e)=>{
  setText(e.target.value)
}
const clickHandler=()=>{
dispatch(getRecipesByName(text));
}

  return(
    <SearchBarStyle>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <input type="search" placeholder='Search for a recipe' value={text} onChange={(e)=>eventHandler(e)}/>
      <div onClick={()=>clickHandler() }><span className="material-symbols-outlined">search</span> </div>

    </SearchBarStyle>
  )


}