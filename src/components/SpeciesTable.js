import React from 'react'
import {Table} from 'react-bootstrap/'


function SpeciesTable(prop) {
    const data = prop.data

  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Species Category</th>
      <th>Number of Species</th>
    </tr>
  </thead>
  <tbody>
      {data.map((row)=>{
            return(
                <tr>
                    <td>{row.Category}</td>
                    <td>{row.numSpecies}</td>
                </tr>
            )
      })}

  </tbody>
</Table>
  )
}

export default SpeciesTable