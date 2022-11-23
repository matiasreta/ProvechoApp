import React from 'react'
import {InformationStyle} from './InformationStyle'
import { useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { getInformation } from '../../Redux/actions'
import parse from 'html-react-parser';

export const Information = (props) => {

  const {id}= useParams();
  const recipe= useSelector(state=>state.information)
  const dispatch=useDispatch();

  React.useEffect(()=>{
    dispatch(getInformation(id))
  },[id,dispatch])

  return (
    <InformationStyle>
      <div className='name'>
      <h1>{recipe.name}</h1>
      <h4>DishTypes</h4>
        { recipe.dishTypes?.map((e)=>{return(<p key={e} >{e}</p>)})}
        <p>Score{recipe.score}</p>
        
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



/*
Los campos mostrados en la ruta principal para cada receta 
imagen V
nombre V
tipo de plato V
tipo de dieta V
Resumen del plato  V
Score V
Paso a Paso V

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

