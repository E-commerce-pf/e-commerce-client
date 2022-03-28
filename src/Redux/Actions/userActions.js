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

export function DeleteFavorite (favorito) {
      return async (dispatch)=>{
            const {UserId:userId,id:favoriteId}=favorito
            const dataToSend = {
                  favoriteId,
                  userId
            }
            // const {data} = await axios.delete(`/api/favorite`,{})
            const {data} = await axios({
                  method:"DELETE",
                  url:`/api/favorite`,
                  data:dataToSend
            })
            return data;
      }
}
