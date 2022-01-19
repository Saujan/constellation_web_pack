import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { உரைக்கு as शोमार } from 'ennikkai';

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
    const headers = ['Id', 'मिति', 'वर्षा', 'अकांश', 'देशान्तर', 'उचाई', 'तापमान']
    const cells = headers.map((header)=>{
      return <TableCell align="right">{header}</TableCell>;
    })
    return <TableHead><TableRow key="0">{cells}</TableRow></TableHead>;
  }

  const tableBody = () => {
    const body = props.data.map((row) => (
        <TableRow
          key={row.données.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.données.id}
          </TableCell>

          <TableCell align="right">{new Date(row.données.मिति).toLocaleDateString("hi-NE-u-nu-deva-ca-indian")}</TableCell>
          <TableCell align="right">{शोमार(row.données.वर्षा, "देवनागरी")}</TableCell>
          <TableCell align="right">{शोमार(row.données.अकांश, "देवनागरी")}</TableCell>
          <TableCell align="right">{शोमार(row.données.देशान्तर, "देवनागरी")}</TableCell>
          <TableCell align="right">{शोमार(row.données.उचाई, "देवनागरी")}</TableCell>
          <TableCell align="right">{शोमार(row.données.temp, "देवनागरी")}</TableCell>
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
