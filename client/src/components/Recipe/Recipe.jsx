import React from 'react'
import {RecipeStyle} from './RecipeStyle'


export const Recipe = (props) => {

  return (
    <RecipeStyle>
      <h2>Dish information</h2>
        <img src={props.image} alt="Dish-Information" />
        <p>{props.name}</p>
        <p>{props.score}</p>
        <p>Score</p>
    </RecipeStyle>
  )
}