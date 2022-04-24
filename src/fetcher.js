const API = 'https://nationalparksfinder550.herokuapp.com/'

const getAllParks= async()=>{
    var res = await fetch(`${API}parks`, {method: 'GET'})
    return res.json()
  }

const getMatchedParks = async(name, state, numSpecies, airportsLimit, evstationsLimit)=>{
  var res = await fetch(`${API}search/parks?state=${state}&speciesmorethan=${numSpecies}&parkname=${name}&airportsmorethan=${airportsLimit}&evsmorethan=${evstationsLimit}`,{method: 'GET'})
  return res.json()
}


const getParkDetails = async(id)=>{
  var res = await fetch(`${API}parkdetails/?parkid=${id}`,{method: 'GET'})
  return res.json()
}

const getSpeciesInfo = async(id)=>{
  var res = await fetch(`${API}species/${id}`,{method: 'GET'})
  return res.json()
}

const getAirportsInfo = async(id)=>{
  var res = await fetch(`${API}airports/${id}`,{method: 'GET'})
  return res.json()
}

const getEVStationsInfo = async(id)=>{
  var res = await fetch(`${API}evstations/${id}`,{method: 'GET'})
  return res.json()
}

const getUniqueSpeciesInfo = async(id)=>{
  var res = await fetch(`${API}uniquespecies/${id}`,{method: 'GET'})
  return res.json()
}

export {
    getAllParks,
    getMatchedParks,
    getParkDetails,
    getSpeciesInfo,
    getAirportsInfo,
    getEVStationsInfo,
    getUniqueSpeciesInfo
}
