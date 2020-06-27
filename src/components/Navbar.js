import React from 'react';

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
	ArrowBack,
	ArrowBackIos,
	ArrowForward,
	ArrowForwardIos,
	AssignmentInd,
	Apps,
	ContactMail
} from "@material-ui/icons";

import avatar from "../avatar_jos.jpg";


const Navbar = () => {
	return (
		<Box component="nav">
			<AppBar position="static" style={{background: "#222"}}>
				<Toolbar>
					<IconButton>
						<ArrowForward style={{color: "tomato"}} />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Navbar