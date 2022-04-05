import React, { useState } from 'react';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Styles from './ReviewUser.module.scss';
import { IoSendSharp } from 'react-icons/io5';
import userService from '../../../Services/user';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { PostReview } from '../../../Redux/Actions/userActions';
import Button from '@mui/material/Button';

export default function ReviewUser({ user, id, setModal }) {
	const [review, setReview] = useState({
		score: '',
		comment: '',
		userId: user.id,
		productId: id,
	});
	const dispatch = useDispatch();

	const handlePostReview = () => {
		try {
			dispatch(PostReview(review));
			toast.success('Review posted');
			setTimeout(() => {
				setModal(false);
			}, 1000);
		} catch (error) {
			toast.error(error);
		}
	};
	return (
		<div className={Styles.contRev}>
			<h2>Create review</h2>
			<textarea
				className={Styles.textare}
				placeholder='Write your review.'
				onChange={(e) => {
					setReview({ ...review, comment: e.target.value });
				}}
			/>
			<span>
				Score:{' '}
				<Rating
					emptySymbol={<AiOutlineStar />}
					fullSymbol={<AiFillStar />}
					onChange={(value) => {
						setReview({ ...review, score: value });
					}}
				/>
			</span>
			<Button className={Styles.btnEdit} onClick={handlePostReview}>
				Send <IoSendSharp className={Styles.emoticon} />
			</Button>
		</div>
	);
}
