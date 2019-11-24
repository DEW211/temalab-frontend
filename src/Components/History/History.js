import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		overflowX: 'auto',
		marginBottom: theme.spacing(3)
	},
	table: {
		marginTop: theme.spacing(10),
		minWidth: 650
	}
}));

function createData(friendly_name, entity_id, last_changed, state) {
	return { friendly_name, entity_id, last_changed, state };
}

export default function SimpleTable() {
	const classes = useStyles();
	const [rows, setRows] = useState([]);

	useEffect(() => {
		async function getData() {
			await setRows([]);
			const res = await fetch('https://temalab-backend.herokuapp.com/api/history/period/4');
			const json = await res.json();
			await json.map(row => {
				row.map(row2 => {
					console.log(row2);
					let newRow = rows;
					newRow.push(
						createData(
							row2.attributes.friendly_name,
							row2.entity_id,
							row2.last_changed,
							row2.state
						)
					);
					setRows(newRow);
				});

				//rows.push(createData(row[0].attributes.friendly_name, row[0].entity_id, row[0].last_changed, row[0].state));
			});
			/* console.log('json');
            console.log(json);
            console.log('rows');
            console.log(rows); */
		}
        console.log('el');
        getData();
        console.log('utan')
		console.log(rows);

		/* function getData(){
        let res = axios({
            method: 'get',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
			url: 'http://localhost:5000/api/history/period/3',
        });

       return res;
    }
		

		

		console.log(getData().data); */

		/*   data.data[0].map(row => {
            return rows.concat(
            createData(row.attributes.friendly_name, row.entity_id, row.last_changed, row.state));
        }) */
	}, []);
	//friendly_name, entity_id, last_changed, state
	return (
		<Paper className={classes.root}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align="right">ID&nbsp;</TableCell>
						<TableCell align="right">Date of change&nbsp;</TableCell>
						<TableCell align="right">State&nbsp;</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.last_changed}>
							<TableCell component="th" scope="row">
								{row.friendly_name}
							</TableCell>
							<TableCell align="right">{row.entity_id}</TableCell>
							<TableCell align="right">{row.last_changed}</TableCell>
							<TableCell align="right">{row.state}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
}
