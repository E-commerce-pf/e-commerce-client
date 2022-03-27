import axios from 'axios';
export const GET_USER = 'GET_USER';
export const LOGOUT_USER ='LOGOUT_USER';
export const DELETE_FAVORITE='DELETE_FAVORITE';

export const getUser = (userData)=>{
      return dispatch =>{
            dispatch( {type: GET_USER, payload : userData} );
      }
}

export const logoutUser= ()=>{
      return dispatch =>{
            dispatch( {type: LOGOUT_USER})
      }
}

export function DeleteFavorite (id) {
      return async (dispatch)=>{
            const {data} =await axios.get(`/api/favorite`,id)
            return dispatch({
                  type:DELETE_FAVORITE, 
            })
      }
}
