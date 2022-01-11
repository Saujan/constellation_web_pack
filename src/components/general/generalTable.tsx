import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type rowData = {
  id: string,
  temp: string,
  उचाई: string,
  मिति: string,
  अकांश: string,
  वर्षा: string,
  देशान्तर:string
}

type rawData = {
  données: rowData,
  empreinte: string
}

type Props = {
  data: rawData[];
};

export default function BasicTable(props: Props) {

  const tableHeader = () => {
    const headers = ['Id', 'मिति', 'वर्षा', 'अकांश', 'देशान्तर', 'उचाई', 'temp']
    const cells = headers.map((header)=>{
      return <TableCell align="right">{header}</TableCell>;
    })
    return <TableHead><TableRow>{cells}</TableRow></TableHead>;
  }

  const tableBody = () => {
    const body = props.data.map((row,index) => (
        <TableRow
          key={index}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.données.id}
          </TableCell>

          <TableCell align="right">{new Date(row.données.मिति).toLocaleDateString("hi-NE-u-nu-deva-ca-indian")}</TableCell>
          <TableCell align="right">{row.données.वर्षा}</TableCell>
          <TableCell align="right">{row.données.अकांश}</TableCell>
          <TableCell align="right">{row.données.देशान्तर}</TableCell>
          <TableCell align="right">{row.données.उचाई}</TableCell>
          <TableCell align="right">{row.données.temp}</TableCell>
        </TableRow>
      ))
    return body;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {tableHeader()}
        <TableBody>
          {tableBody()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
