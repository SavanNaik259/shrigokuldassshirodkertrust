import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SlidingComponent2 from './SlidingComponent2';
const images = [
    { src: "assets/images/slider/slider-1.jpg", alt: 'Image 1' },
    { src: "assets/images/slider/image_02.jpg", alt: 'Image 2' },
        { src: "assets/images/slider/slider-3.jpg", alt: 'Image 3' }
                ];
const Home =()=>{
  return(
    <>
     
    <div className="bg-main">
   <SlidingComponent2 images={images} />
    </div>
    </>
    )
}
export default Home;