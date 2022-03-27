import { GET_USER,LOGOUT_USER,GET_USER_ID} from "../Actions/userActions";

const initialState = {
      currentUser : null,
      userId:null,
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
                        currentUser : null,
                        userId:null
                  }
            case GET_USER_ID:
                  return{
                        ...state,
                        userId:action.payload
                  }
            default:
                  return state
      }
}

export default userReducer