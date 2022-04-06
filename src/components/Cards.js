import React, {useState, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {getAllParks} from '../fetcher'

const Cards = () =>{
  const [allParks, setAllParks] = useState([]);
  useEffect(()=>{
    getAllParks().then((res)=>{
      setAllParks(res.results)
    })
    
  },[])

  // console.log(allParks)
  
  return (
      <div className='cards'>
      <h1>Check out these EPIC National Parks!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {allParks.map((park)=>(
              <CardItem
              src={park.Park_Code.toLowerCase()}
              text={`${park.Park_Name}, ${park.State}`}
              label='More Details'
              path={`/parkdetails`}
              data={park.Park_Code}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
    
  );

}





export default Cards;