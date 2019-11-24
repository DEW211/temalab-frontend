import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(10),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
}));





export default function Logbook() {
  const classes = useStyles();
  const [text, setText] = useState('');

  useEffect(() => {
    async function getData() {
        await setText('');
        const res = await fetch('https://temalab-backend.herokuapp.com/api/error_log');
        const text = await res.text();
        setText(text);
       
        
        
        

       
    }
    
    getData();
    

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

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Error log</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {text.split('\n').map(row => (
              <TableRow key={row}>
                <TableCell component="th" scope="row">
                  {row}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}