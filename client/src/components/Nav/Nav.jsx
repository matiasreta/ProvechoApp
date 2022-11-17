import React from 'react'
import {NavStyle} from './NavStyle'
import {NavLinkStyle} from './NavLinkStyle'
import { SearchBar } from '../SearchBar/SearchBar'

export const Nav = () => {
  

  return (
    <NavStyle>
      <div> 
      <NavLinkStyle to={'/CreateRecipe'}> Create my recipe </NavLinkStyle>
      <NavLinkStyle to={'/Home'}> Home </NavLinkStyle>
      </div>
      <div>
      <SearchBar/>
      </div>

      
    </NavStyle>
  )
}