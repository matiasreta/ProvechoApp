import { GET_RECIPES,GET_INFORMATION,SET_RECIPE } from "./actions";

const initialState={
    recipes:[],
    information:{},
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
    default:{
      return{...state}
    }
  }
}
export default reducer;