import { GET_RECIPES,GET_INFORMATION,SET_RECIPE,GET_DIETS } from "./actions";

const initialState={
    recipes:[],
    information:{},
    diets:[],
    responsePost:"esperando respuesta",
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

    default:{
      return{...state}
    }
  }
}
export default reducer;