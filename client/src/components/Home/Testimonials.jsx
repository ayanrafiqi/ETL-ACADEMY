import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState,useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "../../css/testimonials-style.css";
import { getTestimonials } from '../../services/feedbackService';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    getTestimonials(setTestimonials);
    
  }, []);
   
  return <div>  
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={6100}
    >
  
    {testimonials.map((item)=>(
        <div className="testimonialDiv">
           <img src="../Home/testimonials/testimonials-1.jpg" alt=""/>  
          <div className="myCarousel">
            <h3>{item.user.username}</h3>
            <h4>{item.user.role}</h4>
            <p>
            {item.remarks}
            </p>
          </div>
        </div>))}
        </Carousel>
         </div>
         
    
  }
    
export default Testimonials






 