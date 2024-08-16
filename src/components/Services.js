import React from 'react';
import './App.css';
const Service = () => {
  return (
    <>
    <section className="ftco-section">
      <div className="container">
        <h1 className="common-text fs-1 fw-normal">Help us to Achieve our Goal</h1>
          <hr className='w-50 mx-auto' />
        <div className="row">
          <div className="col-md-4 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 d-flex services p-3 py-4 d-block">
              <div className="icon d-flex mb-3">
                <span className="flaticon-donation-1"></span>
              </div>
              <div className="media-body pl-4">
                <h3 className="heading">Make Donation</h3>
                <p>Making a donation to a charitable cause is a powerful way to support those in need and make a positive impact on the community. By contributing, you help fund vital programs and initiatives that can bring about real change. Every donation, big or small, counts and brings hope to those who need it most.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 d-flex services p-3 py-4 d-block">
              <div className="icon d-flex mb-3">
                <span className="flaticon-charity"></span>
              </div>
              <div className="media-body pl-4">
                <h3 className="heading">Become A Volunteer</h3>
                <p>Becoming a volunteer is a rewarding way to give back to your community and make a meaningful difference. As a volunteer, you can use your time and skills to support important causes, connect with others, and gain valuable experiences. Your efforts can inspire change and bring positive impact to the lives of those you serve.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 d-flex services p-3 py-4 d-block">
              <div className="icon d-flex mb-3">
                <span className="flaticon-donation"></span>
              </div>
              <div className="media-body pl-4">
                <h3 className="heading">Sponsorship</h3>
                <p>Sponsorship is a powerful way to support an organization or event, offering financial assistance in exchange for brand visibility and recognition. By becoming a sponsor, you align your brand with a cause or initiative, helping to drive its success while gaining valuable exposure. Sponsorships create mutually beneficial partnerships that can amplify both the sponsor’s reach and the impact of the sponsored event or organization.






</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className="container-fluid mission-vision row-width">
      <div className="container">
          <div className="row mission">
              <div className="col-md-6 mv-det">
                  <h1>Our Mission</h1>
                  <p className="service-text-2">•To organize socio-cultural activities that bring together people from different backgrounds, fostering understanding and shared humanity.<br/>
•To support and promote Indian sports within the community.<br/>
•To recognize and encourage the often-overlooked hardworking individuals in society through scholarships, felicitations, and other initiatives.<br/>
•To build bridges across cultural divides through innovative and inclusive programming, continuing the legacy of Late Gokuldas S Shirodker.</p>
              </div>
              <div className="col-md-6 mv-img"/>
                  <img src="/images/services-4.jpg" alt=""/>
              </div>
          </div>
              <div className="col-md-6 mv-det">
                   <h1>Our Vision</h1>
                  <p className="service-text-2">
To foster social harmony and unity by promoting cultural exchange, mutual respect, and appreciation among diverse communities, while continuing the legacy of Late Gokuldas S Shirodker in serving society and supporting Indian sports.</p>
              </div>
                <div className="row vision">
              <div className="col-md-6 mv-img"/>
                   <img src="/images/img-01.jpg" alt=""/>
              </div>
  </section>   
  </>
  );
};

export default Service;
