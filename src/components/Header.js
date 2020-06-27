import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from "react-typed";
import avatar from "../SL_greenscrn_dance.png";

// CSS styles
const useStyles = makeStyles(theme=> ({
	avatar: {
		width: theme.spacing(22),
		height: theme.spacing(22),
		margin: theme.spacing(1)
	},
	title: {
		color: "tomato",
		marginTop: "5rem"
	},
	subtitle: {
		color: "tan",
		marginBottom: "3rem"
	},
	typedContainer: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "100vw",
		textAlign: "center",
		zIndex: 1
	}
}));

const Header = () => {
	const classes = useStyles();

	return (
		<Box className={classes.typedContainer}>
			<Grid container justify="center">
			<Avatar className={classes.avatar} src={avatar} alt="Josephine's avatar" />
			</Grid>
			<Typography className={classes.title} variant="h4">
				<Typed strings={["Josephine Dorado"]} typeSpeed={40} />
			</Typography>
			<Typography className={classes.subtitle} variant="h5">
				<Typed 
				strings={["Virtual Experience Designer", "Web Engineer", "Dance Technologist", "Fulbright Scholar", "Media Studies Educator"]} 
				typeSpeed={40}
				backSpeed={60}
				loop 
				/>
			</Typography>

		</Box>
	)
}

export default Header;