import React from 'react';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

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
	classes,
}) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		//
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia component='img' height='194' image={image} alt='Paella dish' />
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					{title}
				</Typography>
				<Typography
					className={classes.price}
					variant='h6'
					color='text.secondary'
				>
					${price}
				</Typography>
				<Typography
					className={classes.price}
					variant='h6'
					color='text.secondary'
				>
					{stock}
				</Typography>
				<Typography
					className={classes.price}
					variant='h6'
					color='text.secondary'
				>
					%{discount}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<AddToBag text={'Add to cart'} id={id} />
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
					<Typography paragraph>Mas información</Typography>
					<Typography paragraph>{description}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default withStyles({
	title: {},
	price: {},
})(CardProduct);
