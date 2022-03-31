import {REVIEWS_USER_ID} from '../Actions/userId';

const initialState={
    idState:null
}
const userReducer = (state = initialState, action )=>{

    switch(action.type){
        case REVIEWS_USER_ID:
            return{
                ...state,
                idState:action.payload,
            }
          default:
                return state
    }
}

export default userReducer;