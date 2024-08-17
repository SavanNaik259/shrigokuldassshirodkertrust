import React from "react";
import SlidingComponent2 from './SlidingComponent2';
const images = [
    { src: "assets/images/slider-1.jpg", alt: 'Image 1' },
    { src: "assets/images/image_02.jpg", alt: 'Image 2' },
        { src: "assets/images/slider-3.jpg", alt: 'Image 3' }
                ];
const Home =()=>{
  return(
    <>
     
    <div>
   <SlidingComponent2 images={images} />
    </div>
    </>
    )
}
export default Home;
