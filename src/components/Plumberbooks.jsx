import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import "./css/Plumberbooks.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

const Plumberbooks = () => {
  const location = useLocation();
  const plumber = location.state?.plumber;

  const [data, setdata] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    address: "",
    servicedate: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await axios.post("http://localhost:3000/plumberbooks", formData);
      toast.success("Plumber has been booked!");
      reset();
    } catch (error) {
      toast.error("Failed to book. Try again.");
      console.error(error);
    }
  };

  const handlechange = (e) => {
    e.preventDefault();
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="plumberbooks">
      <div className="plumberbooks-container">
        {plumber ? (
          <>
            <p>{plumber.name}</p>
            <p>{plumber.cost}</p>
            <p>{plumber.rating}</p>
            <p>{plumber.location}</p>
            <p>{plumber.language}</p>
            <p>{plumber.experience}</p>
            <p>{plumber.service}</p>
          </>
        ) : (
          <p>No plumber data available.</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            onChange={handlechange}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error-text">{errors.name.message}</p>}

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={handlechange}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}

          <label>Mobile Number</label>
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            name="mobilenumber" // ✅ correct name
            onChange={handlechange}
            {...register("mobilenumber", {
              required: "Mobile number is required",
              minLength: { value: 10, message: "Must be 10 digits" },
            })}
          />
          {errors.mobilenumber && (
            <p className="error-text">{errors.mobilenumber.message}</p>
          )}

          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Your Address"
            name="address"
            onChange={handlechange}
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p className="error-text">{errors.address.message}</p>
          )}

          <label>Service Date</label>
          <input
            type="date"
            name="servicedate" // ✅ correct name
            onChange={handlechange}
            {...register("servicedate", {
              required: "Service date is required",
            })}
          />
          {errors.servicedate && (
            <p className="error-text">{errors.servicedate.message}</p>
          )}

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

export default Plumberbooks;
