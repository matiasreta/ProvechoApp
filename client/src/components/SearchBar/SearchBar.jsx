import React from 'react'
import { SearchBarStyle } from './SearchBarStyle'
export const SearchBar =()=>{
    //const [text,setText]=React.useState("");

  return(
    <SearchBarStyle>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <input type="search" placeholder='Search for a recipe' onChange={(event)=>console.log(event)}/>
      <span className="material-symbols-outlined">search</span>

    </SearchBarStyle>
  )


}