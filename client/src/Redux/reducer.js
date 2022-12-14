import { GET_RECIPES,GET_INFORMATION,SET_RECIPE,GET_DIETS,GET_RECIPES_BY_NAME,CLEAN } from "./actions";

const initialState={
    recipes:[],
    information:{},
    diets:[],
    responsePost:"Create new recipe",
}

const reducer=(state=initialState,action)=>{
  switch(action.type){
    case GET_RECIPES:{
      return{...state,recipes:action.payload}
    }
    case GET_INFORMATION:{
      return{...state,information:action.payload}
    }
    case SET_RECIPE:{
      return{...state,responsePost:action.payload}
    }
    case GET_DIETS:{
      return{...state,diets:action.payload}
    }
    case GET_RECIPES_BY_NAME:{
      return{...state,recipes:action.payload}
    }
    case CLEAN:{
      return {...state,information:{}}
    }

    default:{
      return{...state}
    }
  }
}
export default reducer;