import { GET_RECIPES,GET_INFORMATION } from "./actions";

const initialState={
    recipes:[],
    information:{},
}

const reducer=(state=initialState,action)=>{
  switch(action.type){
    case GET_RECIPES:{
      return{...state,recipes:action.payload}
    }
    case GET_INFORMATION:{
      return{...state,information:action.payload}
    }
    default:{
      return{...state}
    }
  }
}
export default reducer;