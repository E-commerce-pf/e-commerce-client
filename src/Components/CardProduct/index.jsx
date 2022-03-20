import React from 'react';
import './CardProduct.css';
import AddToBag from '../AddToBag';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia component='img' height='194' image={image} alt='Product' />
				<CardContent>
					<Typography variant='body2' color='primary'>
						{title}
					</Typography>
					<Typography variant='body2' color='primary'>
						{price}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton color='primary' aria-label='add to favorites'>
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
