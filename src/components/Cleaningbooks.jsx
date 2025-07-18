import React from "react";
import { useLocation } from "react-router-dom";
import './css/Plumberbooks.css'
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

const Cleaningbooks = () => {
  const location = useLocation();
  const cleaning = location.state?.cleaning;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await axios.post("http://localhost:3000/cleanerbooks", formData);
      toast.success("Cleaner has been booked!");
      reset();
    } catch (error) {
      toast.error("Failed to book. Try again.");
      console.error(error);
    }
  };
  
  return (
       <div className='plumberbooks'>
        <div className='plumberbooks-container'>

          
          
          {cleaning ? (
            <> 
            <p>{cleaning.name}</p>
            <p>{cleaning.cost}</p>
            <p>{cleaning.rating}</p>
            <p>{cleaning.location}</p>
            <p>{cleaning.language}</p>
            <p>{cleaning.experience}</p>
            <p>{cleaning.service}</p>
            </> 
            ) :(
              <p>No cleaning data available.</p>
            )
          }


         <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error-text">{errors.name.message}</p>}

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}

          <label>Mobile Number</label>
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            name="mobilenumber"
            {...register("mobilenumber", {
              required: "Mobile number is required",
              minLength: { value: 10, message: "Must be 10 digits" },
            })}
          />
          {errors.mobile && <p className="error-text">{errors.mobile.message}</p>}

          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Your Address"
            name="address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <p className="error-text">{errors.address.message}</p>}

          <label>Service Date</label>
          <input
            type="date"
            name="servicedate"
            {...register("servicedate", { required: "Service date is required" })}
          />
          {errors.date && <p className="error-text">{errors.date.message}</p>}

          {isSubmitting ? (
            <button disabled>Booking...</button>
          ) : (
            <button type="submit">Book Your Slot Now!!</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Cleaningbooks;
