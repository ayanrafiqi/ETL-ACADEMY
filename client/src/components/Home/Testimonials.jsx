import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../css/testimonials-style.css";

const Testimonials = () => {
  // const [feedbacks, setFeedbacks] = useState([]);
  // useEffect(() => {
  //   getAllFeedbacks(setFeedbacks);
  // }, []);

  return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        >
        <div className="testimonialDiv">
          <img src="../Home/testimonials/testimonials-1.jpg" alt=""/> 
          <div className="myCarousel">
            <h3>Ayan Rafiqi</h3>
            <h4>Developer</h4>
            <p>
            I enjoyed learning the new skills. Learning from the experienced
            instructor and the easy to follow steps gave me motivation. Will return for more course materials
             for more learning experience soon. THANK YOU!!!
            </p>
          </div>
        </div>

        <div>
        <img src="../Home/testimonials/testimonials-2.jpg" alt=""/>
          <div className="myCarousel">
            <h3>Malik Zulfikar</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
        <img src="../Home/testimonials/testimonials-3.jpg" alt=""/>
          <div className="myCarousel">
            <h3>Syed Tajamul</h3>
            <h4>Student</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go ,wanting to learn more. I have
             taken 5 course so far and enjoyed all 5 learned a lot.!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
    
export default Testimonials






 