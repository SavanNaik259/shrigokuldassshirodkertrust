import React from "react";
import SlidingComponent2 from './SlidingComponent2';
const images = [
    { src: "assets/images/IMG-20240812-WA0000.jpg", alt: 'Image 1' },
    { src: "assets/images/IMG-20240817-WA0012.jpg", alt: 'Image 2' },
                ];
const Home =()=>{
  return(
    <>
     
    <div className="row-width">
   <SlidingComponent2 images={images} />
    </div>
    </>
    )
}
export default Home;
