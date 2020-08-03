import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
	Box, 
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button, 
	Typography
	} from "@material-ui/core";

import Navbar from "./Navbar";
import project1 from "../images/loft-lake-view.gif"
import project2 from "../images/node_gitQuestions_1.jpg"
import project3 from "../images/screen_HookingUp.jpg"
import project4 from "../images/screen_MarkovMusk.png"

const useStyles = makeStyles({
	mainContainer: {
		background: "#233",
		height: "100%"
	},
	cardContainer: {
		maxWidth: 345,
		margin: "3rem auto",
	}
})

const Portfolio = () => {
	const classes = useStyles();
	return (
		<>
		<Box component="div" className={classes.mainContainer}>
		<Navbar />		
				<Grid container justify="center" alignItems="center">
				{/*Project 1 */}
					<Grid item xs={12} sm={8} md={6}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia
								component="img"
								alt="Project 1"
								height="140"
								image={project1}
								/>
									<CardContent>
										<Typography gutterBottom variant="h5">
										3D Scene Sandbox
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
										3d Scene Sandbox is a sandbox for exploring WebVR space creation using A-Frame. A combination of 3D models and 360-degree photospheres are used to create the immersive space.
										</Typography>
									</CardContent>
							</CardActionArea>
									<CardActions>
										<Button href="https://github.com/funksoup/3d-scene-sandbox"size="small" color="primary">
										 Github
										</Button>
										<Button href="https://funksoup.github.io/3d-scene-sandbox/loft.html" size="small" color="primary">
										 Live demo
										</Button>
									</CardActions>
						</Card>
					</Grid>
				{/*Project 2 */}
					<Grid item xs={12} sm={8} md={6}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia
								component="img"
								alt="Project 2"
								height="140"
								image={project2}
								/>
									<CardContent>
										<Typography gutterBottom variant="h5">
										README Generator
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
										A command-line application that dynamically generates a README.md from a user's input.
										</Typography>
									</CardContent>
							</CardActionArea>
									<CardActions>
										<Button href="https://github.com/funksoup/readme-generator" size="small" color="primary">
										 Github
										</Button>
									</CardActions>
						</Card>
					</Grid>
					{/*Project 3 */}
					<Grid item xs={12} sm={8} md={6}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia
								component="img"
								alt="Project 3"
								height="140"
								image={project3}
								/>
									<CardContent>
										<Typography gutterBottom variant="h5">
										 Hooking Up in Your Hood
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
										Web app that promotes awareness and prevention of HIV, specifically geared toward New Yorkers. Input zipcode to display number of HIV cases by neighborhood, free condom distribution sites, informational videos and free testing sites.										</Typography>
									</CardContent>
							</CardActionArea>
									<CardActions>
										<Button href="https://github.com/funksoup/Hooking-Up-in-Your-Hood" size="small" color="primary">
										 Github
										</Button>
										<Button href="https://funksoup.github.io/Hooking-Up-in-Your-Hood/" size="small" color="primary">
										 Live demo
										</Button>
									</CardActions>
						</Card>
					</Grid>
					{/*Project 4 */}
					<Grid item xs={12} sm={8} md={6}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia
								component="img"
								alt="Project 4"
								height="140"
								image={project4}
								/>
									<CardContent>
										<Typography gutterBottom variant="h5">
										Markov poem: Elon Musk meets Erica Jong
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
										A generative poem that uses a Markov algorithm to mash up Elon Musk’s tweets with Erica Jong’s erotic poetry, along with a word cloud of the underlying code.
										</Typography>
									</CardContent>
							</CardActionArea>
									<CardActions>
										<Button href="https://github.com/funksoup/markov-poem" size="small" color="primary">
										 Share
										</Button>
										<Button href="http://bit.ly/markov-musk" size="small" color="primary">
										 Live demo
										</Button>
									</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}


export default Portfolio