import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';

const App = () => {
	return (
		<Container maxWidth="lg">
			<AppBar position="static" color="inherit">
				<Typography varaint="h2" align="center">
					MemoryBank
				</Typography>
				<img src={memories} alt="memories" height="60" />
			</AppBar>
		</Container>
	);
};

export default App;
