import React from 'react';
import './CardProduct.css';
import AddToBag from '../AddToBag';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
	description,
}) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		// <div className='card-container'>
		// 	<div className='card_img'>
		// 		<img src={image} alt={title} width='250px' height='150px' />
		// 	</div>
		// 	<div className='card_info'>
		//     <h3>{description}</h3>
		// 		<h4>{title}</h4>
		// 		<h4>PRECIO:{price}$</h4>
		// 		<p>STOCK:{stock}</p>
		// 		<p>DESCUENTO:{discount}</p>
		// 		<AddToBag text={'Añadir al carrito'} id={id} />
		// 	</div>
		// </div>

		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					height='194'
					image={image}
					alt='Paella dish'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						{title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{price}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='Mas informacion'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography paragraph>mas informacion del producto</Typography>
						<Typography paragraph>{description}</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</>
	);
};

export default CardProduct;
