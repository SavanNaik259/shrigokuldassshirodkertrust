import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  return (
    <>
      <section className="ftco-section-3 img" style={{ backgroundImage: "url('images/IMG-20240812-WA0027.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row d-md-flex">
            <div className="col-md-6 d-flex ftco-animate">
              <div className="img img-2 align-self-stretch" style={{ backgroundImage: "url('images/bg_2.jpg')" }}></div>
            </div>
            <div className="col-md-6 volunteer pl-md-5 ftco-animate">
              <h3 className="mb-3">Get In Touch With Us</h3>
  <form action="https://formsubmit.co/shri.gokuldas.s.shirodker.trust@gmail.com" method="POST"className="volunter-form">
  <input type="hidden" name="_template" value="table"/>
  <input type="hidden" name="_autoresponse" value="your custom message"/>
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    className="form-control"
                    id="exampleFormUserFirstName"
                    type="text" 
                    name="First Name"
                    placeholder="First Name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlnumber"
                    placeholder="name@example.com"
                    name="Email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">Mobile Number</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    id="number" 
                    name="number" 
                    pattern="\d{10,}" 
                    placeholder="9364271352" 
                    autoComplete="off" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Textarea" className="form-label">Address (optional)</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="address"
                    autoComplete="off"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="Textarea" className="form-label">Message (optional)</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="Message"
                    autoComplete="off"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Send Message" className="btn btn-white py-3 px-5" />
                </div>
              </form>
              <button onClick={scrollToTop} className="text-capitalize btn btn-secondary scroll-button btn-width">Scroll top <i className="fa-solid fa-arrow-up-long"></i></button>
            </div>
          </div>
        </div>
      </section>

      <footer className="ftco-footer ftco-section img">
        <div className="overlay"></div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About Us</h2>
                <p>Late Gokuldas S Shirodker was a dedicated development officer at LIC and a passionate social worker in Margao, Goa. He held significant positions, including Vice Chairperson of Margao Municipal Council and Vice President of the Kho Kho Federation of India, earning multiple awards for his contributions. In his memory, the Shri Gokuldas S Shirodker Trust was established to continue his legacy of promoting socio-cultural harmony and supporting Indian sports.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate"><a href="https://www.facebook.com/profile.php?id=61564027696775&mibextid=LQQJ4d"><span className="icon-facebook"></span></a></li>
                  <li className="ftco-animate"><a href="https://www.instagram.com/gokuldasshirodker?igsh=MWloYmp0Mm51Ymk1MA=="><span className="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Site Links</h2>
                <ul className="list-unstyled">
                  <li><NavLink to="/" className="py-2 d-block">Home</NavLink></li>
                  <li><NavLink to="/about" className="py-2 d-block">About</NavLink></li>
                  <li><NavLink to="/programs" className="py-2 d-block">Programs</NavLink></li>
                  <li><NavLink to="/services" className="py-2 d-block">Services</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Contact Us</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-phone"></span><span className="text">+91 9096609309<br/>+91 9822987590</span></li>
                    <li><span className="icon icon-envelope"></span><span className="text">shri.gokuldas.s.shirodker.trust@gmail.com</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
  


          
