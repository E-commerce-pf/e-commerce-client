import React, { useState } from 'react';
import styles from './MisProductos.module.css';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@material-ui/core';
import ReviewUser from '../reviewUser/ReviewUser';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		height: '350px',
		width: '600px',
		borderRadius: '5px',
		backgroundColor: '#23263B',
		border: '2px solid #23263b',
		boxShadow: theme.shadows[5],
		padding: '16px 32px 24px',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
	},
}));

export const MisProductos = ({ Transactions, user }) => {
	const navigate = useNavigate();
	const classes = useStyles();
	const [modal, setModal] = useState(false);
	const [id, setId] = useState();

	const body = (
		<div className={classes.modal}>
			<ReviewUser user={user} setModal={setModal} id={id} />
		</div>
	);
	const openCloseModal = () => {
		setModal(!modal);
	};
	const handleId = (id) => {
		setId(id);
	};
	console.log(Transactions);
	return (
		<>
			<div className={styles.containerProd}>
				<div className={styles.containerProdInd}>
					{Transactions && Transactions.length >= 1 ? (
						Transactions.map(
							(e) =>
								e.state === 'complete' &&
								e.cart.productsInCart.map((e) =>
									e.product ? (
										<div className={styles.prd} key={e.product.id}>
											<h2 className={styles.title}>{e.product.title}</h2>
											<img
												className={styles.imG}
												src={e.product.image}
												alt='img_carrito'
												onClick={() =>
													navigate(`/productDetail/${e.product.id}`)
												}
											/>
											<h3 className={styles.parrafo}>
												Descripcion:{e.product.description}
											</h3>

											<button
												onClick={() => {
													handleId(e.product.id);
													openCloseModal();
												}}
												className={styles.btnSend}
											>
												Create review
											</button>
										</div>
									) : (
										<h2 className={styles.title}>
											This product does not exist
										</h2>
									)
								)
						)
					) : (
						<div className={styles.NohayFav}>
							<h2>You have no products added </h2>
						</div>
					)}
					<Modal open={modal} onClose={openCloseModal}>
						{body}
					</Modal>
				</div>
			</div>
		</>
	);
};
