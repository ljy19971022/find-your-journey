import React from 'react'
import {Table} from 'react-bootstrap/'


function UniqueSpeciesTable(prop) {
    const data = prop.data

  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Species Category</th>
      <th>Scientific Name</th>
    </tr>
  </thead>
  <tbody>
      {data.map((row)=>{
            return(
                <tr>
                    <td>{row.Category}</td>
                    <td>{row.SCIENTIFIC_NAME}</td>
                </tr>
            )
      })}

  </tbody>
</Table>
  )
}

export default UniqueSpeciesTable