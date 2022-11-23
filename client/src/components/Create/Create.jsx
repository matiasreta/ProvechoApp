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
//conecto con redux para enviar la info
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

// name
// summary
// score Nivel de "comida saludable"
// instructions

/*
{
  "name": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
  "image": "https://spoonacular.com/recipeImages/716426-556x370.jpg",
  "dishTypes": [
      "side dish"
  ],
  "diets": [
      "gluten free",
      "dairy free",
      "lacto ovo vegetarian",
      "vegan"
  ],
  "score": 76,
  "summary": "Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199\">Vegetable Fried Brown Rice</a>, <a href=\"https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261\">Vegetable Fried Cauliflower Rice</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042\">Easy Vegetable Fried Brown Rice with Egg</a>.",
  "instructions": "<ol><li><span></span>Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"</li><li>Heat 1T butter and 1T oil in a large skillet over medium heat. Add garlic and the white and light green pieces of scallion. Sauté about a minute.</li><li>Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.</li><li>Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom. Let it sit for about two minutes—so the rice can get toasted and a little crispy. Add the peas and broccoli and stir again. Drizzle soy sauce and toasted sesame oil over rice.</li><li>Cook for another minute or so and turn off heat. Add chopped scallion tops and toss.</li><li>I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.</li><li>Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.</li></ol>"
}

*/