import React from 'react'
import {useState, useEffect} from 'react'
import { getMatchedParks } from "../fetcher";
import {Col, Row, FloatingLabel, Form, Button} from 'react-bootstrap/'
import "./SearchForm.css"

function SearchForm(props) {
    const [matchedResults, setMatchedResults] = useState([]);
    const [matchedName, setMatchedName] = useState("");
    const [matchedState, setMatchedState] = useState("");
    const [speciesLimit, setSpeciesLimit] = useState(0);
    const [airportsLimit, setAirportsLimit] = useState(0);
    const [evstationsLimit, setEVStationsLimit] = useState(0);
  
    const stateCode = [
      '', 'AK', 'AZ','AR','CA','CO','CT','DE', 'DC','FL','GA','HI','ID', 'IL','IN',
      'IA','KS','KY','LA','ME','MD','MA', 'MI', 'MN', 'MS','MO','MT','NE','NV','NH','NJ',
      'NM','NY','NC','ND','OH','OK', 'OR','PA','RI','SC','SD','TN','TX','UT','VT',
      'VA', 'WA','WV','WI','WY','AS', 'GU','MH', 'FM', 'MP','PW','PR','VI',
    ];
  
    // const handleMatchedResultsChange = (event) => {
    //   event.preventDefault();
    //   getMatchedParks(matchedName, matchedState, speciesLimit).then((res) => {
    //     console.log(res.results);
    //     setMatchedResults(res.results);
    //   });
    // };
  
    const handleMatchedNameChange = (event) => {
      setMatchedName(event.target.value);
      console.log(matchedName)
    };
  
    const handleMatchedStateChange = (event) => {
      setMatchedState(event.target.value);
      console.log(matchedState)
    };
  
    const handleSpeciesLimitChange = (event) => {
      setSpeciesLimit(event.target.value);
      console.log(speciesLimit)
    };
    const handleairportsLimitChange = (event) => {
      setAirportsLimit(event.target.value);
      console.log(airportsLimit)
    };
    const handleEVStationsLimitChange = (event) => {
      setEVStationsLimit(event.target.value);
      console.log(evstationsLimit)
    };

    const simulateNetworkRequest=()=> {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    
    const LoadingButton=()=> {
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
        if (isLoading) {
          simulateNetworkRequest().then(() => {
            setLoading(false);
          });
        }
      }, [isLoading]);
    
      const handleClick = (event) => {
        setLoading(true);
        event.preventDefault();
        getMatchedParks(matchedName, matchedState, speciesLimit, airportsLimit, evstationsLimit).then((res) => {
          props.formResult(res)
        });
      }

      return(
      <Button
      variant="success"
      size="lg"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Submit'}
    </Button>
      )}


  return (
    <Form className="searchform">
    <Row className="mb-3">
      <Form.Group as={Col} controlId="parkname">
        <Form.Label className="label">Park Name</Form.Label>
        <Form.Control type="text" placeholder="Acadia National Park" onChange={handleMatchedNameChange}/>
      </Form.Group>

        <Form.Group as={Col} controlId="state">
          <Form.Label className="label">State</Form.Label>
                  <Form.Select aria-label="Floating label select example" onChange={handleMatchedStateChange}>
                    {
                      stateCode.map((state)=>
                          <option value={state}>{state}</option>
                      )
                    }
                  </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="species">
        <Form.Label className="label">Minimum Species</Form.Label>
        <Form.Control type="number" min = "0" placeholder="0" onChange={handleSpeciesLimitChange}/>
      </Form.Group>

      <Form.Group as={Col}  controlId="airports">
        <Form.Label className="label">Minimum Airports Nearby</Form.Label>
        <Form.Control type="number" min = "0" placeholder="0" onChange={handleairportsLimitChange}/>
      </Form.Group>

      <Form.Group as={Col}  controlId="evstation">
        <Form.Label className="label">Minimum EV Stations Nearby</Form.Label>
        <Form.Control type="number" min = "0" placeholder="0" onChange={handleEVStationsLimitChange}/>
      </Form.Group>
      </Row>
      <div className="d-grid gap-2">
      <LoadingButton/>
      </div>
    </Form>
  )
}

export default SearchForm
