import BASE_URL from "../../config/baseUrl";
import axios from 'axios'
export const ALL_REVIEWS = "ALL_REVIEWS";

export const allReviews=(reviews)=>dispatch=>{
    return Promise.all(reviews.map(review=>{
        return axios.get(`${BASE_URL}user/find/${review.userId}`)
        .then(({data})=>{return {...review,userName:`${data.name} ${data.lastName}`}});
    })).then(data=>{
        return dispatch({ type: ALL_REVIEWS, payload: data });
    })
}
