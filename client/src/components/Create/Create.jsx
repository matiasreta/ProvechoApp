import React from 'react'
import {CreateStyle} from './CreateStyle'
import {useDispatch,useSelector} from 'react-redux'
import {setNewRecipe,getDiets} from '../../Redux/actions'
import { Diets } from '../Diets/Diets'
import img from '../../img/1111.webp'
import {ImgStyle} from './ImgStyle'
import {FormStyle} from './FormStyle'
import {InputStyle} from './InputStyle'
import {RangeStyle} from './RangeStyle'

export const Create = (props) => {
  const responsePost = useSelector(state=>state.responsePost)
  const dietsList = useSelector(state=>state.diets)
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(getDiets())
  },[dispatch])

  const[newRecipe,setRecipe]=React.useState({
    name:"",
    summary:"",
    instructions:"",
    score:0,
    diets:[],
  })

  const clickHandler=(e)=>{
    e.preventDefault();

    let errorPersists=false;
    for (const value in eMessage) {
      if(eMessage[value].length>0){
        errorPersists=true;
      }
    }

    if(errorPersists)alert("complete los campos con los datos requeridos")
    else dispatch(setNewRecipe(newRecipe))
    
  }
  const listener=(e)=>{
      setRecipe({...newRecipe, [e.target.name]:e.target.value})
      errorHandler(e);
  }
  const [eMessage,setError]=React.useState({
    name:"",summary:"",instructions:"",score:"",
  })

  const errorHandler=(e)=>{
    const regex=/\S\D/gi;

    if(e.target.name==='score'){
      if(e.target.value>100 ){
        setError({...eMessage,[e.target.name]:"maximo score 100"})
        
      }else if(e.target.value<0 ){
        setError({...eMessage,[e.target.name]:"no se permite numero negativos"})
      }else{
        setError({...eMessage,[e.target.name]:""})
      }

    }else if(!regex.test(e.target.value)){
      setError({...eMessage,[e.target.name]:"campo vacio"})
    }else{
      setError({...eMessage,[e.target.name]:""})
    }
      

  }

  const [arrDiets,setArrDiets]=React.useState([]);

  const selectDiets=(e)=>{
    if(e.target.value.length<4)return null

    dietsList.forEach((o)=> {
      if(o.name.includes(e.target.value)){
        if(!newRecipe.diets.includes(o.id)){
          setRecipe({...newRecipe, diets:newRecipe.diets.concat([o.id])})
          setArrDiets([...arrDiets,{id:o.id,name:o.name}])
        }
        
      }
    });
  }

  const reset=()=>{
    setArrDiets([])
    setRecipe({name:"",summary:"",instructions:"",score:0,diets:[],})
  }

  return (
    <CreateStyle>
      
      <ImgStyle img={img}></ImgStyle>
      <FormStyle action="" onSubmit={(e)=>clickHandler(e)}>

        <div>
          <h3>NEW RECIPE</h3>
          <label htmlFor="name"></label>
          <InputStyle type="text" name="name" placeholder='Name' value={newRecipe.name}  onChange={(e)=>listener(e)}/>
          <small>{ eMessage.name}</small>
        </div>
        <div>
          <label htmlFor="summary"></label>
          <textarea name="summary" placeholder='Summary' value={newRecipe.summary} onChange={(e)=>listener(e)} ></textarea>
          <small>{ eMessage.summary}</small>
        </div>
        <div>
          <label htmlFor="instructions"></label>
          <textarea name="instructions" placeholder='Instructions' value={newRecipe.instructions} onChange={(e)=>listener(e)} ></textarea>
          <small>{ eMessage.instructions}</small>
        </div>
        <div>
          <label htmlFor="score"></label>
          <RangeStyle type="number" placeholder='Range' name="score" value={newRecipe.score} onChange={(e)=>listener(e)}/>

          <label htmlFor="diets"></label>
          <RangeStyle type='text' placeholder='Diets' list='dietas' name="diets" onChange={(e)=>selectDiets(e)} />

          <datalist id="dietas">
            {dietsList.map(e=>{
              return( <option value={e.name} key={e.id}></option> )
            })}
          </datalist>

          <small>{ eMessage.score}</small>
          <div>
          {arrDiets.map(o=>{ return (<Diets key={o.id} name={o.name} />)})}

          </div>
        </div>

        
        <div>
          <button type="submit">{responsePost}</button>
          <input type='reset' className='reset' onClick={()=>reset()} value='Reset'/>
          {console.log(eMessage)}
          {console.log(newRecipe)}
        </div>

      </FormStyle>

    </CreateStyle>
  )
}
