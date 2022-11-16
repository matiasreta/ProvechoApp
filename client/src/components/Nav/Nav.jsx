import React from 'react'
import {NavStyle} from './NavStyle'
import {NavLinkStyle} from './NavLinkStyle'

export const Nav = () => {
  //const [text,setText]=React.useState("");

  return (
    <NavStyle>
      <NavLinkStyle to={'/CreateRecipe'}> Create my recipe </NavLinkStyle>
      <NavLinkStyle to={'/Home'}> Home </NavLinkStyle>
      
      <input type="search" onChange={(event)=>console.log(event)}/>
    </NavStyle>
  )
}