import Carousel from 'react-bootstrap/Carousel'
import {useState, useEffect, useRef} from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import Card from 'react-bootstrap/Card'
import './Carousel.css'
const CarouselPage = (prop)=>{
    // const [loading, setLoading] = useState(true)
    // const counter = useRef(0);
    // const imageLoaded = ()=>{
    //     counter.current+=1;
    //     if (counter.current >= prop.images.length){
    //         setLoading(false);
    //     }
    // }

    // useEffect(()=>{
    // },[loading])

    const images = prop.images
    
    return(
        // <div className="container">
        // <>
        // <div style={{display: loading ? "block" : "none"}}>
        //     <Spinner animation="grow" />
        // </div>
        // <div style={{display: loading ? "none" : "block"}}>
        <div>
        {images.length<3 && 
            <Carousel>
            <Carousel.Item>
                <div className="image_box">
                <img
                className="d-block w-100"
                src={images[0].url}
                alt={images[0].altText}
                // onLoad = {imageLoaded}
                />
                </div>
                <Carousel.Caption>
                <h3>{images[0].title}</h3>
                <p>{images[0].caption}</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>}
        {images.length>=3 &&
         <Carousel fade>
         <Carousel.Item>
             <div className="image_box">
             <img
             className="d-block w-100"
             src={images[0].url}
             alt={images[0].altText}
             // onLoad = {imageLoaded}
             />
             </div>
             <Carousel.Caption>
             <h3>{images[0].title}</h3>
             <p>{images[0].caption}</p>
             </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
         <div className="image_box">
             <img
             className="d-block w-100"
             src={images[1].url}
             alt={images[1].altText}
             // onLoad = {imageLoaded}
             />
             </div>
             <Carousel.Caption>
             <h3>{images[1].title}</h3>
             <p>{images[1].caption}</p>
             </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
         <div className="image_box">
             <img
             className="d-block w-100"
             src={images[2].url}
             alt={images[2].altText}
             // onLoad = {imageLoaded}
             />
             </div>
             <Carousel.Caption>
             <h3>{images[2].title}</h3>
             <p>P{images[2].caption}</p>
             </Carousel.Caption>
         </Carousel.Item>
         </Carousel>}
        </div>
    )
}

export default CarouselPage



