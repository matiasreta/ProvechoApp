import React from 'react'
import {RecipeStyle} from './RecipeStyle'
import { Link } from 'react-router-dom'


export const Recipe = (props) => {

  return (
    <RecipeStyle>
        <img src={props.image} alt="Dish-Information" width="280" height="210" />
        <div>
        <p>{props.name}</p>
        <p>Score: {props.score}</p>
        <Link to={`/information/${props.id}`}>informacion</Link>
        </div>
        
    </RecipeStyle>
  )
}