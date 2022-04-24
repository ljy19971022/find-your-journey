import React from 'react'
import {useState, useEffect} from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {Row, Col, Nav} from 'react-bootstrap/'
import "./ParkDetail.css"
import {getSpeciesInfo, getEVStationsInfo, getAirportsInfo, getUniqueSpeciesInfo} from '../fetcher'
import SpeciesTable from './SpeciesTable'
import EVStationTable from './EVStationTable'
import AirportsTable from './AirportsTable'
import UniqueSpeciesTable from './UniqueSpeciesTable'

function ParkDetail(prop) {
  const data = prop.data
  console.log(data)
  
  const [speciesData, setSpeciesData] = useState()
  const [evstationsData, setEVStationsData] = useState()
  const [airportsData, setAirportsData] = useState()
  const [uniqueSpeciesData, setUniqueSpeciesData] = useState()
  
  const handleSpeciesSearch=()=>{
    getSpeciesInfo(data.parkCode).then((res)=>{
        setSpeciesData(res.results)
    })
  }

  const handleUniqueSpeciesSearch=()=>{
    getUniqueSpeciesInfo(data.parkCode).then((res)=>{
        setUniqueSpeciesData(res.results)
    })
  }
  
  const handleTransportationSearch=()=>{
      getEVStationsInfo(data.parkCode).then((res)=>{
        setEVStationsData(res.results)
        console.log(res)
      })
      getAirportsInfo(data.parkCode).then((res)=>{
        setAirportsData(res.results)
        console.log(res)
    })
  }

  useState(()=>{},[speciesData, airportsData, evstationsData, uniqueSpeciesData])



  return (
    <div className="detail">
    <Tab.Container id="left-tabs-example" defaultActiveKey="basicInfo">
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="basicInfo">Basic Info</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="species" onClick={handleSpeciesSearch}>Species</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="uniqueSpecies" onClick={handleUniqueSpeciesSearch}>Unique Species</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="transportation"onClick={handleTransportationSearch}>Transportation</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="basicInfo">
                    <label>Description:</label>
                    <p>{data.description}</p>
                    <label>Address:</label>
                    <p>{data.addresses[0].line1}, {data.addresses[0].city}, {data.addresses[0].stateCode}</p>
                    <p>Direction Info: {data.directionsInfo}</p>
                    <a href={data.directionsUrl}>Park Website</a>
                    <br/>
                    <label>Hours:</label>
                    <p>{data.operatingHours[0].description}</p>
                </Tab.Pane>
                <Tab.Pane eventKey="species">
                    <label>Species Available at {data.name}: </label>
                    {speciesData && <SpeciesTable data={speciesData}/>}
                </Tab.Pane>
                <Tab.Pane eventKey="uniqueSpecies">
                    <label>Unique Species to {data.name}, not found in any other National Parks: </label>
                    {uniqueSpeciesData && <UniqueSpeciesTable data={uniqueSpeciesData}/>}
                </Tab.Pane>
                <Tab.Pane eventKey="transportation">
                    <label>Airports Nearby {data.name}: </label>
                    {airportsData && <AirportsTable data={airportsData}/>}
                    <label>EV Stations Nearby {data.name}: </label>
                    {evstationsData && <EVStationTable data={evstationsData}/>}
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </div>
  )
}

export default ParkDetail
