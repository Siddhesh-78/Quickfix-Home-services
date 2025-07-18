import React from "react";
import "./css/Home.css";
import Fotter from "./Fotter";
const Home = () => {

  const Testimonials = [
  {
    "name": "Amit Kumar",
    "location": "Udaipur",
    "rating": 5,
    "feedback": "QuickFix saved my weekend! The electrician arrived within 30 minutes and resolved everything perfectly."
  },
  {
    "name": "Aarav Mehta",
    "location": "Mumbai",
    "rating": 5,
    "feedback": "QuickFix saved my weekend! The electrician arrived within 30 minutes and resolved everything perfectly."
  },
  {
    "name": "Sneha Patil",
    "location": "Pune",
    "rating": 4,
    "feedback": "Very professional and on-time service. I booked a plumber and the experience was smooth and hassle-free."
  },
  {
    "name": "Rahul Sharma",
    "location": "Thane",
    "rating": 5,
    "feedback": "The best part is the quick booking and fair pricing. Highly recommended for any home services!"
  },
  {
    "name": "Priya Desai",
    "location": "Navi Mumbai",
    "rating": 4.5,
    "feedback": "Cleaner came fully equipped and was super polite. I’ll definitely use QuickFix again."
  },
  {
    "name": "Kunal Joshi",
    "location": "Andheri",
    "rating": 5,
    "feedback": "Great service! Everything was done neatly and professionally. Booking experience was seamless."
  }
]


  return (
    <>
      <div className="home">
        <h2 className="heading">
          <span className="color">"QuickFix</span> <br /> Fast, Reliable, and
          Hassle-Free Home Services"
        </h2>
        <p className="home-para">
          QuickFix brings reliable home services like plumbing, electrical, and
          cleaning right to your doorstep. Book trusted professionals in just a
          few clicks with fast response, transparent pricing, and top-quality
          service.
        </p>
        <div className="home-content">
          <input type="text" placeholder="Search for services" className="home-input"/>
          <button className="home-btn">Search</button>
        </div>

        <div className="Testimonials">
           <h2>Testimonials</h2>
            <div className="Testimonials-container">
             {Testimonials.map((testimonial, index) => (
                <div key={index}  className="Testimonials-card">
                 <p className="Testimonials-name">{testimonial.name}</p>
                 <p className="Testimonials-location">{testimonial.location}</p>
                 <p className="Testimonials-rating">Rating: {testimonial.rating}</p>
                 <p className="Testimonials-feedback">{testimonial.feedback}</p>
               </div>
             ))}
            </div>
        </div>

        <section className="why-choose-us">
  <h2>Why Choose Us</h2>
  <div className="why-container">
    <div className="why-card">
      <p className="why-icon">✅</p>
      <h3>Verified Professionals</h3>
      <p>All service providers are background-checked and trained.</p>
    </div>
    <div className="why-card">
      <p className="why-icon">💰</p>
      <h3>Transparent Pricing</h3>
      <p>No hidden charges. Know the cost before you book.</p>
    </div>
    <div className="why-card">
      <p className="why-icon">⚡</p>
      <h3>Quick Booking</h3>
      <p>Get services at your doorstep in just a few taps.</p>
    </div>
    <div className="why-card">
      <p className="why-icon">📞</p>
      <h3>24/7 Support</h3>
      <p>Need help? Our team is available around the clock.</p>
    </div>
  </div>
</section>



      </div>

       

     
    </>
    
  );
};

export default Home;
