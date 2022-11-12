import React from 'react'
import RecipeStyle from './RecipeStyle'
export const Create = (props) => {

  return (
    <RecipeStyle>
      <h2>Dish information</h2>
        <img src={"image"} alt="Dish-Information" />
        <p>Name</p>
        <p>DishTypes</p>
        <p>Score</p>
    </RecipeStyle>
  )
}