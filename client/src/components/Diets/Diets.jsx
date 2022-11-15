import React from 'react'
import {DietsStyle} from'./DietsStyle'

export const Diets = (props) => {
  return (
    <DietsStyle>
      {props.name}
    </DietsStyle>
  )
}