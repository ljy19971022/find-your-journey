import React, { useState, useEffect } from "react";

import ParkTable from '../components/ParkTable'
import SearchForm from '../components/SearchForm'

const ParkSearch = () => {
  const [matchedResults, setMatchedResults] = useState();
  
  const handleFormSubmit = (matchedResults)=>{
    setMatchedResults(matchedResults.results)
    console.log(matchedResults)
  }

  useEffect(() => {}, [matchedResults]);

  return (
    <div className="parksearch">
      <h1>Find Your Next Destination</h1>
    <div className="form">
      <SearchForm formResult={handleFormSubmit}/>
    </div>
    <div id='table'>
    {matchedResults && <ParkTable matchedResults={matchedResults}/>}
    </div>
    </div>


    // <div className="parksearch">
    //   <div className="form__container" id="cover">
    //   <h1 id='title'>Find your next destination!</h1>
    //   <form onSubmit={handleMatchedResultsChange} className="parksearch__form">
    //     <label>
    //       Park Name
    //       <input
    //         type="text"
    //         value={matchedName}
    //         placeholder="Acadia"
    //         onChange={handleMatchedNameChange}
    //       />
    //     </label>
    //     <label>
    //       State
    //       <select
    //         value={matchedState}
    //         placeholder="ME"
    //         onChange={handleMatchedStateChange}
    //       >{
    //           stateCode.map((state)=>
    //               <option value={state}>{state}</option>
              
    //           )
    //      }</select>
    //     </label>
    //     <label>
    //       Number of Species
    //       <input
    //         type="number"
    //         placeholder="10"
    //         value={speciesLimit}
    //         onChange={handleSpeciesLimitChange}
    //       />
    //     </label>
    //     <button type="submit">Submit</button>
    //   </form>
    //   </div>
    //   <div id='table'>
    //   {matchedResults && <ParkTable matchedResults={matchedResults}/>}
    //   </div>
    // </div>
   
  )
  
}

export default ParkSearch