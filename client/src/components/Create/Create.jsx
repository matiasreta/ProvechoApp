import React from 'react'
import {CreateStyle} from './CreateStyle'

export const Create = (props) => {
//conecto con redux para enviar la info






  return (
    <CreateStyle>
      <h3>Create Recipe</h3>
      <form action="">
        <label htmlFor="Name">Name</label>
        <input type="text" name="name"/>

        <label htmlFor="Summary">Summary</label>
        <input type="text" name="Summary"/>

        <label htmlFor="Summary">Summary</label>
        <input type="text" name="Summary"/>

      </form>
    </CreateStyle>
  )
}

// Nombre
// Resumen del plato
// Nivel de "comida saludable" (health score)
// Paso a paso


