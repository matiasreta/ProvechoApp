import React from 'react'
import {RecipeStyle} from './RecipeStyle'
import { Link } from 'react-router-dom'


export const Recipe = (props) => {

  return (
    <RecipeStyle>
      <h2>Dish information</h2>
        <img src={props.image} alt="Dish-Information" />
        <p>{props.name}</p>
        <p>Score: {props.score}</p>
        <Link to={`/information/${props.id}`}>informacion</Link>
    </RecipeStyle>
  )
}