import React from "react";
import RecommendCourses from "../components/Home/RecommendCourses";
import "../assets/style.css";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import Testimonials from "../components/Home/Testimonials";

const HomePage = () => {
  return (
    <div className="home-page">
      <section
        id="hero"
        class="d-flex justify-content-center align-items-center"
      >
        <div
          class="container position-relative"
          dataAos="zoom-in"
          dataAosDelay="100"
        >
          <h1>
            Learning Today,
            <br />
            Leading Tomorrow
          </h1>
          <h2>We aggregate all free to use content on the net in one place</h2>
          <a href="/signup" class="btn-get-started">
            Get Started
          </a>
        </div>
      </section>

      <main id="main">
        <section id="about" class="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                class="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src="/img/about.jpg" class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>Free Academic Resources.</h3>
                <p class="fst-italic">
                  Wisdom is not a product of schooling but of the lifelong
                  attempt to acquire it - Albert Einstein
                </p>
                <ul>
                  <li>
                    <i class="bi bi-check-circle"></i> Courses in local
                    languages, taught by local teacher of the region.
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i>User friendly UI and a
                    suit of features to assist you in learning.
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i> We aggreated all free to
                    use content on the net in one place.
                  </li>
                </ul>
                <p>Best Learning Platform</p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" class="why-us">
          <div className="container" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Choose ETL Academy?</h3>
                  <p>
                    Comprehensive, yet still concise. Decent-paced, No ads, No
                    disruption to the flow of information to a student. free
                    courses you like to concentrate on
                  </p>
                  <div className="text-center">
                    <a href="/signup" class="more-btn">
                      Learn More <i class="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-8 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div class="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-receipt"></i>
                        <h4>Free Academic Resources</h4>
                        <p>
                          We aggreated all free to use content on the net in one
                          place
                        </p>
                      </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-cube-alt"></i>
                        <h4>Global &amp; Localised Content</h4>
                        <p>
                          Courses in local languages,taught by local teacher of
                          the region
                        </p>
                      </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-images"></i>
                        <h4>Easy to use,browse &amp; access.</h4>
                        <p>
                          User friendly UI and a suit of features to assit you
                          in learning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="popular-courses" class="courses">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Courses</h2>
              <p>Popular Courses</p>
            </div>
            <RecommendCourses />
          </div>
        </section>
      </main>
      <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>What Says Our Students</h2>
              <p>Testimonials</p>
            </div>
            <Testimonials />
          </div>

      <footer id="footer">
        <div class="footer-top">
          <div className="container">
            <div className="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>ETL Academy</h3>
                <p>
                  MA road <br />
                  lalchowk, 190001
                  <br />
                  Kashmir <br />
                  <strong>Phone:</strong> +91-8803478551
                  <br />
                  <strong>Email:</strong> ayanafiqui@gmail.com
                  <br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#s">Terms of service</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#s">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#s">Web Design</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#s">Web Development</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#s">Product Management</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#s">Marketing</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#s">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container d-md-flex py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright{new Date().getFullYear()}{" "}
              <strong>
                <span>ETL Academy</span>
              </strong>
              . All Rights Reserved
            </div>
            <div class="credits">
              Designed by <a href="https:/.com/">Ayan Rafiqi</a>
            </div>
          </div>
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" class="twitter">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" class="google-plus">
              <i class="bx bxl-skype"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
