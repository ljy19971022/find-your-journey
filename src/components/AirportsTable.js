import React from 'react'
import {Table} from 'react-bootstrap/'

function AirportsTable(props) {
    const data = props.data
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name of the Airport</th>
        <th>State</th>
      </tr>
    </thead>
    <tbody>
        {data.map((row)=>{
              return(
                  <tr>
                      <td>{row.Name}</td>
                      <td>{row.State_Abbr}</td>
                  </tr>
              )
        })}
  
    </tbody>
  </Table>
  )
}

export default AirportsTable