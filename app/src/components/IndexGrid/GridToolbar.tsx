import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles: any = {
	buttonNew: {
		background: '#4caf50',
		border: 3,
		margin: 5,
		borderStyle: 'outset',
		borderColor: '#cfd8dc',
		color: 'white',
		fontWeight: 600,
		height: 24,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(0, 0, 135, .3)',
	},
	buttonInactivate: {
		background: '#b71c1c',
		border: 3,
		margin: 5,
		borderStyle: 'outset',
		borderColor: '#cfd8dc',
		color: 'white',
		fontWeight: 600,
		height: 24,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(0, 0, 135, .3)',
	},
	toolbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		border: 3,
		height: 40,
		borderStyle: 'outset',
		backgroundColor: 'white'
	}
}

const GridToolbar = ({classes, children, className, ...other}: any) => {
	return (
				<div
					className={classNames(classes.toolbar, className)} {...other}
				>
					<Button
						className={classNames(classes.buttonNew, className)} {...other}
					>
						New Index
					</Button>
			<Button
				className={classNames(classes.buttonInactivate, className)} {...other}
			>
				Inactivate
					</Button>
				</div>
	);
}

export default withStyles(styles)(GridToolbar);