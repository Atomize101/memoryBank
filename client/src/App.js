import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import Posts from '../src/components/Posts/Posts';
import Form from './components/Form/Form';

const App = () => {
	return (
		<Container maxWidth="lg">
			<AppBar position="static" color="inherit">
				<Typography varaint="h2" align="center">
					MemoryBank
				</Typography>
				<img src={memories} alt="memories" height="60" />
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justify="space-between" alignItems="stretch" spaceing={3}>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
