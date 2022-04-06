import React from 'react';
import Button from './Button'
import video from '../Videos/video1.mp4'
import '../App.css'
import './VideoDisplay.css'

const VideoDisplay =()=> {
    return (
        <div className='video-container'>
            <video autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
            <h1>ADVENTURE AWAITS</h1>
            <p>Start your JOURNEY today!</p>
            <div className="video-btns">
                {/* <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                ALL PARKS
                </Button> */}
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large' path='/parksearch'>
                FIND YOUR DESTINATIONS
                </Button>
            </div>
        </div>
    )

}

export default VideoDisplay