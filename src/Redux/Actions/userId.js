import axios from 'axios';
export const REVIEWS_USER_ID='REVIEWS_USER_ID';


export function reviewUserId(userId){
	return async (dispatch) => {
		let infoGet = await(await axios.get('/api/reviews/' + userId)).data;
		

		return dispatch({
			type: REVIEWS_USER_ID,
			payload: infoGet,
		});
	};
}