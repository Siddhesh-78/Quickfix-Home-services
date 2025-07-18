import React from 'react'
import "./css/Plumber.css"
import { Link } from 'react-router-dom';
import Plumberbooks from './Plumberbooks';

const Plumber = () => {

  const plumbers = [
  {
    id: 1,
    name: "Ambrose Fletcher",
    cost: "₹300/hour",
    rating: 4.6,
    location: "Mumbai",
    language: "Hindi",
    experience: "6 years",
    service: "Geyser installation",
    path: "/plumberbooks"
  },
  {
    id: 2,
    name: "Cedric Langley",
    cost: "₹320/hour",
    rating: 4.7,
    location: "Thane",
    language: "Marathi",
    experience: "8 years",
    service: "Pipe leakage repair",
    path: "/plumberbooks"
  },
  {
    id: 3,
    name: "Reuben Aldridge",
    cost: "₹280/hour",
    rating: 4.4,
    location: "Navi Mumbai",
    language: "Hindi",
    experience: "5 years",
    service: "Bathroom plumbing",
    path: "/plumberbooks"
  },
  {
    id: 4,
    name: "Basil Thorne",
    cost: "₹290/hour",
    rating: 4.3,
    location: "Pune",
    language: "Marathi",
    experience: "7 years",
    service: "Tap repair",
    path: "/plumberbooks"
  },
  {
    id: 5,
    name: "Lionel Pritchard",
    cost: "₹310/hour",
    rating: 4.8,
    location: "Borivali",
    language: "Hindi",
    experience: "9 years",
    service: "Water pump setup",
    path: "/plumberbooks"
  },
  {
    id: 6,
    name: "Oswin Carlisle",
    cost: "₹270/hour",
    rating: 4.2,
    location: "Dombivli",
    language: "Marathi",
    experience: "5 years",
    service: "Drainage system repair",
    path: "/plumberbooks"
  },
  {
    id: 7,
    name: "Neville Redfern",
    cost: "₹300/hour",
    rating: 4.6,
    location: "Vashi",
    language: "Hindi",
    experience: "6 years",
    service: "Toilet seat installation",
    path: "/plumberbooks"
  },
  {
    id: 8,
    name: "Quentin Rowe",
    cost: "₹260/hour",
    rating: 4.1,
    location: "Panvel",
    language: "Marathi",
    experience: "4 years",
    service: "Outdoor pipe setup",
    path: "/plumberbooks"
  },
  {
    id: 9,
    name: "Percival Drake",
    cost: "₹280/hour",
    rating: 4.3,
    location: "Ratnagiri",
    language: "Hindi",
    experience: "6 years",
    service: "Toilet repair",
    path: "/plumberbooks"
  },
  {
    id: 10,
    name: "Harvey Elwood",
    cost: "₹350/hour",
    rating: 4.9,
    location: "Alibaug",
    language: "Marathi",
    experience: "10 years",
    service: "Mainline pipe inspection",
    path: "/plumberbooks"
  },
  {
    id: 11,
    name: "Elspeth Warren",
    cost: "₹290/hour",
    rating: 4.5,
    location: "Chembur",
    language: "Hindi",
    experience: "7 years",
    service: "Kitchen sink repair",
    path: "/plumberbooks"
  },
  {
    id: 12,
    name: "Agnes Whitmore",
    cost: "₹310/hour",
    rating: 4.4,
    location: "Andheri",
    language: "Marathi",
    experience: "6 years",
    service: "Hot water system",
    path: "/plumberbooks"
  },
  {
    id: 13,
    name: "Gwendolyn Baxter",
    cost: "₹275/hour",
    rating: 4.2,
    location: "Khopoli",
    language: "Hindi",
    experience: "5 years",
    service: "Water pipe fitting",
    path: "/plumberbooks"
  },
  {
    id: 14,
    name: "Sybil Cartwright",
    cost: "₹295/hour",
    rating: 4.7,
    location: "Nashik",
    language: "Marathi",
    experience: "8 years",
    service: "Tank cleaning",
    path: "/plumberbooks"
  },
  {
    id: 15,
    name: "Isolde Frampton",
    cost: "₹300/hour",
    rating: 4.5,
    location: "Dadar",
    language: "Hindi",
    experience: "6 years",
    service: "Bathroom renovation",
    path: "/plumberbooks"
  }
];


  return (
    <div className='plumber'>
     <h1 className="electrician-heading" style={{textAlign: 'center', margin:"20px"}}>Available Plumbers</h1>
    <div className='plumber-container'>
    {plumbers.map((plumber) => (
    <div key={plumber.id} className="plumber-card">
    <h3><strong>Name:</strong>{plumber.name}</h3>
    <p><strong>Service:</strong> {plumber.service}</p>
    <p><strong>Cost:</strong> {plumber.cost}</p>
    <p><strong>Rating:</strong> ⭐ {plumber.rating}</p>
    <p><strong>Location:</strong> {plumber.location}</p>
    <p><strong>Language:</strong> {plumber.language}</p>
    <p><strong>Experience:</strong> {plumber.experience}</p>
    <Link to={plumber.path} state={{plumber}} ><button className="book-button">Book Now</button></Link>
  </div>
))}

            </div>
        </div>
  )
}

export default Plumber
