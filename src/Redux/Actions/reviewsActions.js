import axios from 'axios'
export const GET_ROUT_REVIEW= `/api/reviews/products/score?mayorQue=4`;

export const GET_REVIEW= 'GET_REVIEW';

export default function getReview(){
    return async(dispatch)=>{
        let infoGetReview= await axios.get(GET_ROUT_REVIEW)
        let infoGet=infoGetReview.data;
        
        console.log(infoGet,'este es el infoGet')
        return dispatch({
            type:GET_REVIEW,
            payload:infoGet,
        })
    }
}