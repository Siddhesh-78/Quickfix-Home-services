import React from 'react'
import { Link } from 'react-router-dom';
import './css/Electrician.css'

const Electrician = () => {
  const electricians = [
    {
      id: 1,
      name: "Nigel Thornton",
      cost: "₹350/hour",
      rating: 4.7,
      location: "Mumbai",
      language: "Hindi",
      experience: "7 years",
      service: "Ceiling fan installation",
      path: "/electricianbooks"
    },
    {
      id: 2,
      name: "Clive Lancaster",
      cost: "₹370/hour",
      rating: 4.6,
      location: "Thane",
      language: "Marathi",
      experience: "6 years",
      service: "Switchboard repair",
      path: "/electricianbooks"
    },
    {
      id: 3,
      name: "Malcolm Hurst",
      cost: "₹400/hour",
      rating: 4.8,
      location: "Navi Mumbai",
      language: "Hindi",
      experience: "10 years",
      service: "Wiring and rewiring",
      path: "/electricianbooks"
    },
    {
      id: 4,
      name: "Gilbert Nash",
      cost: "₹320/hour",
      rating: 4.4,
      location: "Pune",
      language: "Marathi",
      experience: "5 years",
      service: "Power socket installation",
      path: "/electricianbooks"
    },
    {
      id: 5,
      name: "Victor Blanchard",
      cost: "₹390/hour",
      rating: 4.9,
      location: "Panvel",
      language: "Hindi",
      experience: "9 years",
      service: "Fuse repair",
      path: "/electricianbooks"
    },
    {
      id: 6,
      name: "Arnold Heath",
      cost: "₹360/hour",
      rating: 4.5,
      location: "Vashi",
      language: "Marathi",
      experience: "6 years",
      service: "Inverter setup",
      path: "/electricianbooks"
    },
    {
      id: 7,
      name: "Trevor Sutherland",
      cost: "₹340/hour",
      rating: 4.3,
      location: "Kalyan",
      language: "Hindi",
      experience: "5 years",
      service: "Tube light fitting",
      path: "/electricianbooks"
    },
    {
      id: 8,
      name: "Reginald Fawcett",
      cost: "₹380/hour",
      rating: 4.6,
      location: "Dombivli",
      language: "Marathi",
      experience: "8 years",
      service: "Electrical inspection",
      path: "/electricianbooks"
    },
    {
      id: 9,
      name: "Dennis Tilling",
      cost: "₹310/hour",
      rating: 4.2,
      location: "Andheri",
      language: "Hindi",
      experience: "4 years",
      service: "AC point setup",
      path: "/electricianbooks"
    },
    {
      id: 10,
      name: "Leonard Radcliffe",
      cost: "₹400/hour",
      rating: 4.8,
      location: "Borivali",
      language: "Marathi",
      experience: "10 years",
      service: "Short circuit repair",
      path: "/electricianbooks"
    }
  ];

  return (
    <div className='electrician'>
      <h1 className="electrician-heading" style={{textAlign: 'center', margin:"20px"}}>Available Electricians</h1>
      <div className='electrician-container'>
        {electricians.map((electrician) => (
          <div key={electrician.id} className='electrician-item'>
            <h3>{electrician.name}</h3>
            <p><strong>Cost:</strong> {electrician.cost}</p>
            <p><strong>Rating:</strong> ⭐ {electrician.rating}</p>
            <p><strong>Location:</strong> {electrician.location}</p>
            <p><strong>Language:</strong> {electrician.language}</p>
            <p><strong>Experience:</strong> {electrician.experience}</p>
            <p><strong>Service:</strong> {electrician.service}</p>
            <Link to={electrician.path} state={{ electrician }}><button className='btn'>Book Now</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electrician;
