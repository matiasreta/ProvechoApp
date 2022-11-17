import React from 'react'
import { SearchBarStyle } from './SearchBarStyle'
export const SearchBar =()=>{
    //const [text,setText]=React.useState("");

  return(
    <SearchBarStyle>
      <input type="search" onChange={(event)=>console.log(event)}/>
    </SearchBarStyle>
  )


}