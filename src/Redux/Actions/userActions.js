import axios from 'axios';
import BASE_URL from "../../config/baseUrl";
export const GET_USER = 'GET_USER';

export const getUser = (userData)=>{
      return dispatch =>{
            dispatch( {type: GET_USER, payload : userData} );
      }
}