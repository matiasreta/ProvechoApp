import React from 'react'
import {InformationStyle} from './InformationStyle'

export const Information = () => {


  return (
    <InformationStyle>
      <h2>Dish information</h2>
        <img src="" alt="Dish-Information" />
        <p>Name</p>
        <p>DishTypes</p>
        <p>Score</p>
        <p>Information</p>

        <div>
        <h4>Comments</h4>
        <small>Summary</small>
        </div>
    </InformationStyle>
  )
}

// Los campos mostrados en la ruta principal para cada receta 
// imagen
// nombre
// tipo de plato
// tipo de dieta
// Resumen del plato
// Score
// Paso a Paso