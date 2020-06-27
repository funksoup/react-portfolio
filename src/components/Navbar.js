import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import {
	AppBar,
	Toolbar,
	ListItem,
	ListItemIcon,
	IconButton,
	ListItemText,
	Avatar,
	Divider,
	List,
	Typography,
	Box
} from "@material-ui/core";

import {
	Menu,
	Home,
	ArrowBack,
	ArrowBackIos,
	ArrowForward,
	ArrowForwardIos,
	AssignmentInd,
	Apps,
	ContactMail
} from "@material-ui/icons";

import avatar from "../avatar_jos.jpg";

// CSS styles
const useStyles = makeStyles(theme=> ({
	menuSliderContainer: {
		width: 250,
		background: "#511",
		height: "30rem"
	},
	avatar: {
		display: "block",
		margin: "0.5rem auto",
		width: theme.spacing(13),
		height: theme.spacing(13)
	}
}));


const menuItems = [
	{
		listIcon: <Home />,
		listText: "Home"
	},
		{
		listIcon: <AssignmentInd />,
		listText: "Resume"
	},
		{
		listIcon: <Apps />,
		listText: "Portfolio"
	},
		{
		listIcon: <ContactMail />,
		listText: "Contact"
	}
];


const Navbar = () => {
	const classes = useStyles()
	return (
		<>
		<Box className={classes.menuSliderContainer} component="div">
			<Avatar className={classes.avatar} src={avatar} alt="Josephine's avatar" />
			<Divider />
			<List>
				{menuItems.map((lsItem, key)=> (
				<ListItem button key={key}>
					<ListItemIcon>{lsItem.listIcon}</ListItemIcon>
					<ListItemText primary={lsItem.listText} />
				</ListItem>
				))}
			</List>
		</Box>
		<Box component="nav">
			<AppBar position="static" style={{background: "#222"}}>
				<Toolbar>
					<IconButton>
						<Menu style={{color: "tomato"}} />
					</IconButton>
					<Typography variant="h5" style={{color: "tan"}}>
					Portfolio
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
		</>
	)
}

export default Navbar