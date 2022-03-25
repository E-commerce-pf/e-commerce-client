import { GET_USER,LOGOUT_USER} from "../Actions/userActions";

const initialState = {
      currentUser : null
}

const userReducer = (state = initialState, action )=>{
      switch(action.type){
            case GET_USER:
                  return {
                        ...state,
                        currentUser : action.payload
                  }
            case LOGOUT_USER:
                  return { 
                        ...state,
                        currentUser : null
                  }
            default:
                  return state
      }
}

export default userReducer