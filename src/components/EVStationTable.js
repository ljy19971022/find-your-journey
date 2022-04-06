import React from 'react'
import {Table} from 'react-bootstrap/'


function EVStationTable(prop) {
    const data = prop.data
    console.log(data)

    return (
      <Table striped bordered hover>
        <thead>
        <tr>
            <th>Charging Station Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
        </tr>
        </thead>
        <tbody>
            {data.map((row)=>{
                return(
                    <tr>
                        <td>{row.Name}</td>
                        <td>{row.Address}</td>
                        <td>{row.City}</td>
                        <td>{row.State}</td>
                        <td>{row.Zip}</td>
                    </tr>
                )
            })}
    
        </tbody>
    </Table>
    )
}

export default EVStationTable