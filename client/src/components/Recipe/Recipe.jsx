import React from 'react'
import {RecipeStyle} from './RecipeStyle'
import { Diets } from '../Diets/Diets'
import { CardInfo } from './CardInfo'
import {LinkInformation} from './LinkInformation'

export const Recipe = (props) => {

  return (
    <RecipeStyle>
        <img src={props.image} alt="Dish-Information" width="280" height="210" />
        <CardInfo>
        <h3>{props.name}</h3>
        <p>Health Score: {props.score}</p>
        <br />

        {props.diets.map(e=>{
          return(<Diets name={e} key={e}/>)
        })}
        </CardInfo>
        <LinkInformation to={`/information/${props.id}`}>information</LinkInformation>
    </RecipeStyle>
  )
}