import React, { Component, Fragment } from 'react';
import ReactDataGrid from 'react-data-grid';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Paper from '@material-ui/core/Paper';

type GridState = {
	rows: any[]
}

function resolveColor(value: string) {
	switch (value) {
		case "Published":
			return "green";
		case "Unpublished":
			return "orange";
		case "Archived":
			return "purple";
		default:
			return "black";
	}
}

const ProgressBarFormatter = ({ value }: any) => {

	return typeof value === "number" ?
		<ProgressBar now={value} label={`Publish Pending ${value}%`} /> :
		<p style={{ color: resolveColor(value) }}>{value}</p>;
}

const columns = [
	{ key: "id", name: "ID", editable: true },
	{ key: 'name', name: 'Name', editable: true },
	{ key: 'publicationStatus', name: 'Status', formatter: ProgressBarFormatter }
];

const rows = [
	{ id: "0", name: 'Galaxy_1', publicationStatus: "Unpublished" },
	{ id: "1", name: 'Galaxy_1', publicationStatus: "Published" },
	{ id: "2", name: 'Galaxy_1', publicationStatus: "Archived" },
	{ id: "3", name: 'Galaxy_1', publicationStatus: 40 },
];

class Grid extends Component<any, GridState> {

	state = { rows };

	private onGridRowsUpdated = ({ fromRow, toRow, updated }: any): void =>
		this.setState(() => {
			const rows = this.state.rows.slice();
			for (let i = fromRow; i <= toRow; i++) {
				rows[i] = { ...rows[i], ...updated }
			}
			return { rows };
		})

	render() {
		return (

				<ReactDataGrid
					columns={columns}
					rowGetter={(i: number) => this.state.rows[i]}
					rowsCount={this.state.rows.length}
					onGridRowsUpdated={this.onGridRowsUpdated}
				/>
		);
	}
}

export default Grid;
