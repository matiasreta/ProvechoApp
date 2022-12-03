import React from 'react'
import {InformationStyle} from './InformationStyle'
import { useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { getInformation,cleanInformation } from '../../Redux/actions'
import parse from 'html-react-parser';
import {Diets} from '../Diets/Diets'

export const Information = (props) => {

  const {id}= useParams();
  const recipe= useSelector(state=>state.information)
  const dispatch=useDispatch();

  React.useEffect(()=>{
    dispatch(getInformation(id))
    return dispatch(cleanInformation());
  },[id,dispatch])

  return (
    <InformationStyle>
      <div className='name'>
      <h1>{recipe.name}</h1>
      <h4>DishTypes</h4>
        { recipe.dishTypes?.map((e)=>{return(<p key={e} >{e}</p>)})}
        <p>Score{recipe.score}</p>
        <h4>Diets</h4>
        {recipe.diets?.map((e)=>{return(<Diets key={e} name={e} />)})}
      </div>
      <div > 
        <img src={recipe.image} alt="Dish-Information" />
      </div>
        <div className='instructions'>
          {recipe.instructions?(<h4>instructions</h4>):null}
          {recipe.instructions && parse(recipe.instructions)}
        </div>

        <div className='comments'>
        
        <h4>Comments</h4>
        <small>{recipe.summary && parse(recipe.summary)}</small>
        </div>

    </InformationStyle>
  )
}
