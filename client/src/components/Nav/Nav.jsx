import React from 'react'
import {NavStyle} from './NavStyle'
import {NavLinkStyle} from './NavLinkStyle'
import { SearchBar } from '../SearchBar/SearchBar'

export const Nav = () => {
  

  return (
    <NavStyle>
      <div> 
      <NavLinkStyle to={'/Home'}> HOME </NavLinkStyle>
      <NavLinkStyle to={'/CreateRecipe'}> CREATE RECIPE </NavLinkStyle>
      
      </div>
      <div>
      <SearchBar/>
      </div>

      
    </NavStyle>
  )
}