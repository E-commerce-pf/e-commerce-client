import React from 'react';
import styles from './CardProduct.module.css';
import AddToBag from '../AddToBag';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { withStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const CardProduct = ({
	image,
	title,
	id,
	price,
	stock,
	discount,
	score,
	description,
}) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		// <>

		// <div className={styles.cardContaine}>
		// 	<div className={styles.cardImg}>
		// 		<img src={image} alt={title} width='250px' height='150px' />
		// 	</div>
		// 	<Link to={`/productDetail/${id}`}>
		// 		<div className={styles.cardInfo}>
		// 			<h4>{title}</h4>
		// 			<h4>PRECIO:{price}$</h4>
		// 			<p>STOCK:{stock}</p>
		// 			<p>DESCUENTO:{discount}</p>
		// 			{score && <Rating name='read-only' value={score} readOnly />}
		// 		</div>
		// 	</Link>
		// 	<AddToBag text={'Añadir al carrito'} id={id} />
		// </div>
		// </>
		<>
			<Card sx={{ maxWidth: 345 }}>
				<Link to={`/productDetail/${id}`}>
					<CardHeader title={title} subheader={`PRECIO: ${price}$`} />
					<CardMedia
						component='img'
						height='194'
						image={image}
						alt='Paella dish'
					/>
					<CardContent>
						<Typography variant='body6' color='text.secondary'>
							{`STOCK: ${stock}`} {`DESCUENTO: ${discount}`}
						</Typography>{' '}
						<Typography variant='body2' color='textSecondary' component='p'>
							{score && <Rating name='read-only' value={score} readOnly />}
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton aria-label='add to favorites'>
							<AddToBag text={'Añadir al carrito'} id={id} />
						</IconButton>
						<IconButton aria-label='share'>
							<FavoriteIcon />
						</IconButton>
						<ExpandMore
							expand={expanded}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label='show more'
						>
							<ExpandMoreIcon />
						</ExpandMore>
					</CardActions>
					<Collapse in={expanded} timeout='auto' unmountOnExit>
						<CardContent>
							<Typography paragraph>información adicional</Typography>
							<Typography paragraph>{description}</Typography>
						</CardContent>
					</Collapse>
				</Link>
			</Card>
		</>
	);
};

export default withStyles({
	title: {},
	price: {},
})(CardProduct);
