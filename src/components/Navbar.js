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
	Menu,
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
		<>
		<Box component="div">
			<Avatar src={avatar} alt="Josephine's avatar" />
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