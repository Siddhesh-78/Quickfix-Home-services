import React from "react";
import { Link } from "react-router-dom";
import "./css/Services.css";

const Services = () => {
  // Categories (e.g. plumber, electrician)
  const serviceCategories = [
    { id: 1, 
      name: "Plumber", 
      icon: "Expert in pipe repair", 
      path: "/plumber" 
    },
    {
      id: 2,
      name: "Electrician",
      icon: "Handles wiring & circuits",
      path: "/electrician",
    },
    {
      id: 3,
      name: "Installation",
      icon: "Appliance & device setup",
      path: "/installation",
    },
    {
      id: 4,
      name: "Cleaning",
      icon: "Home & office cleaning",
      path: "/cleaning",
    },
  ];

  return (
    <div className="services">
      <h1 style={{ textAlign: "center", color: "#2563eb", margin: "7px" }}>
        Services Categories
      </h1>
      <div className="category-container">
        {serviceCategories.map((category) => {
          return (
            <div key={category.id} className="category-item">
              <h2>{category.name}</h2>
              <p>{category.icon}</p>
              <Link to={category.path}>
                <button>Visit</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
