import React from 'react'
import {useState, useEffect} from 'react'
import {getParkDetails} from '../fetcher'
import CarouselPage from '../components/CarouselPage'
import ParkDetail from '../components/ParkDetail'
function ParkDetailPage(prop) {

  const [parkDetails, setParkDetails] = useState()
  console.log(prop.location.state)
  useEffect(() =>{
    getParkDetails(prop.location.state).then((res)=>{
        setParkDetails(res.data[0])
        console.log(res.data[0])
        console.log(res.data[0].addresses)
    })
  },[])

  
  
  return (
      <>
        {parkDetails && 
            <>
            <CarouselPage images={parkDetails.images}/>
            <ParkDetail data={parkDetails}/>
            </>
        }
     </>
    
  )
}

export default ParkDetailPage