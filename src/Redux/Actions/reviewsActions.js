import axios from 'axios';
import BASE_URL from "../../config/baseUrl";
export const GET_ROUT_REVIEW = `/api/reviews/products/score?mayorQue=4`;
export const GET_REVIEW = 'GET_REVIEW';
export const ALL_REVIEWS = "ALL_REVIEWS";
export const allReviews=(reviews)=>dispatch=>{
    return Promise.all(reviews.map(review=>{
        return axios.get(`${BASE_URL}user/find/${review.userId}`)
        .then(({data})=>{return {...review,userName:`${data.name} ${data.lastName}`}});
    })).then(data=>{
        return dispatch({ type: ALL_REVIEWS, payload: data });
    })
  
export default function getReview() {
	return async (dispatch) => {
		let infoGetReview = await axios.get(GET_ROUT_REVIEW);
		let infoGet = infoGetReview.data;

		return dispatch({
			type: GET_REVIEW,
			payload: infoGet,
		});
	};
}
