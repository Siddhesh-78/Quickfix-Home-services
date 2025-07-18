import React from 'react'
import { Link } from 'react-router-dom';
import "./css/Plumber.css"
import Cleaningbooks from './Cleaningbooks';

const Cleaning = () => {
    const cleaners = [ 
  {
    id: 1,
    name: "Clarissa Doyle",
    cost: "₹250/hour",
    rating: 4.5,
    location: "Mumbai",
    language: "Hindi",
    experience: "5 years",
    service: "Home deep cleaning",
    path: "/cleaningbooks"
  },
  {
    id: 2,
    name: "Martha Pendleton",
    cost: "₹270/hour",
    rating: 4.7,
    location: "Thane",
    language: "Marathi",
    experience: "6 years",
    service: "Kitchen cleaning",
    path: "/cleaningbooks"
  },
  {
    id: 3,
    name: "Edith Hawthorne",
    cost: "₹240/hour",
    rating: 4.4,
    location: "Navi Mumbai",
    language: "Hindi",
    experience: "4 years",
    service: "Sofa and carpet cleaning",
    path: "/cleaningbooks"
  },
  {
    id: 4,
    name: "Rosalind Fairfax",
    cost: "₹260/hour",
    rating: 4.6,
    location: "Pune",
    language: "Marathi",
    experience: "7 years",
    service: "Bathroom cleaning",
    path: "/cleaningbooks"
  },
  {
    id: 5,
    name: "Veronica Ashworth",
    cost: "₹280/hour",
    rating: 4.8,
    location: "Panvel",
    language: "Hindi",
    experience: "8 years",
    service: "Water tank cleaning",
    path: "/cleaningbooks"
  },
  {
    id: 6,
    name: "Beatrice Langdon",
    cost: "₹230/hour",
    rating: 4.3,
    location: "Dombivli",
    language: "Marathi",
    experience: "3 years",
    service: "Office cleaning",
    path: "/cleaningbooks"
  },
  {
    id: 7,
    name: "Helena Cartwright",
    cost: "₹300/hour",
    rating: 4.9,
    location: "Kalyan",
    language: "Hindi",
    experience: "10 years",
    service: "Commercial premises cleaning",
    path: "/cleaningbooks"
  },
  {
    id: 8,
    name: "Irene Woodridge",
    cost: "₹260/hour",
    rating: 4.5,
    location: "Vashi",
    language: "Marathi",
    experience: "6 years",
    service: "Pest control & sanitization",
    path: "/cleaningbooks"
  },
  {
    id: 9,
    name: "Priscilla Harrow",
    cost: "₹250/hour",
    rating: 4.4,
    location: "Borivali",
    language: "Hindi",
    experience: "5 years",
    service: "Window & glass cleaning",
    path: "/cleaningbooks"
  },
  {
    id: 10,
    name: "Nora Fenwick",
    cost: "₹270/hour",
    rating: 4.6,
    location: "Andheri",
    language: "Marathi",
    experience: "7 years",
    service: "Mattress & curtain cleaning",
    path: "/cleaningbooks"
  }
];

  return (
    <div className='plumber'>
       <h1 className="electrician-heading" style={{textAlign: 'center', margin:"20px"}}>Available Cleaners</h1>
    <div className='plumber-container'>
        {cleaners.map((cleaner)=>{
            return(
                <div key={cleaner.id} className="plumber-card">
                   <h3>{cleaner.name}</h3>
    <p><strong>Service:</strong> {cleaner.service}</p>
    <p><strong>Cost:</strong> {cleaner.cost}</p>
    <p><strong>Rating:</strong> ⭐ {cleaner.rating}</p>
    <p><strong>Location:</strong> {cleaner.location}</p>
    <p><strong>Language:</strong> {cleaner.language}</p>
    <p><strong>Experience:</strong> {cleaner.experience}</p>
    <Link to={cleaner.path} state={{cleaning: cleaner}} ><button className="book-button">Book Now</button></Link>
                </div>
            )
        })}


        </div>
        </div>
  )
}

export default Cleaning
