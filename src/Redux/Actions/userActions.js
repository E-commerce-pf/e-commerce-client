import axios from 'axios';
export const GET_USER = 'GET_USER';
export const LOGOUT_USER ='LOGOUT_USER';
export const DELETE_FAVORITE='DELETE_FAVORITE';
export const GET_CART='GET_CART';

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

export const getCart= (userId)=>{
      return async dispatch =>{
            const {data} = await axios.get(`/api/cart/${userId}`)
            dispatch( {type: GET_CART,payload:data.cart.ProductInCarts.map(p=>{return {id:p.productId,amount:p.quantity}})})
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
