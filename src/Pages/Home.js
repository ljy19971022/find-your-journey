import '../App.css';
import React from 'react'
import VideoDisplay from '../components/VideoDisplay'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

const Home=()=> {
    return (
        <>
            <VideoDisplay/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home