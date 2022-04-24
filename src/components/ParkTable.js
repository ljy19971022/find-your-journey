import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useHistory } from "react-router-dom";
import "./ParkTable.css"
const columns = [
  { id: 'Park_Name', label: 'Park Name', minWidth: 170 },
  { id: 'State', label: 'State', minWidth: 100 },
  {
    id: 'numSpecies',
    label: 'Number of Species',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'numAirports',
    label: 'Airports Nearby',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'numEVS',
    label: 'EV Stations Nearby',
    minWidth: 170,
    align: 'right',
  },
  
];

const ParkTable=(props)=> {

  // console.log(props)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const history = useHistory()
  const handleRouteChange = (event) =>{
    // console.log(event.Park_Code)
    let path = '/parkdetails'
    history.push(path, [event.Park_Code])
    // let path = `http`;
    // history.push(path)
  }

  return (
    <div className="table__container">
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  id="columns__header"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {props.matchedResults.length>0 && <TableBody>
            {props.matchedResults
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={()=>handleRouteChange(row)}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.matchedResults.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}

export default ParkTable
