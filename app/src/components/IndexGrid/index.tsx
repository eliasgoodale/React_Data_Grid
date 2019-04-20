import React, { Fragment } from 'react';
import Grid from './Grid';
import GridToolbar from './GridToolbar';
import Paper from '@material-ui/core/Paper';

export default () => 
	<Fragment>
		<div className="indexGridContainer">
		<Paper elevation={10}>
		<GridToolbar/>
		<Grid/>
		</Paper>
		</div>
	</Fragment>