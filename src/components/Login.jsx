import React from "react";
import { useForm } from "react-hook-form";
import "./css/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const handlechange = (e) => {
    e.preventDefault();
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (formdata) => {
    try {
      const data = await axios.post("http://localhost:3000/login", formdata);
      toast.success("Login successful");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2 className="login-title">Login🔒</h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="login-input"
         onChange={handlechange}
          name="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="error-text">{errors.name.message}</p>}
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          className="login-input"
         onChange={handlechange}
          name="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
        <p className="error-text">{errors.email.message}</p>
      )}
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          className="login-input"
          onChange={handlechange}
          name="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
        />
        {errors.password && (
          <p className="error-text">{errors.password.message}</p>
        )}

        {isSubmitting && <div>Submitting...</div>}
        <button disabled={isSubmitting} type="submit" className="login-button">
          Submit
        </button>
        <p className="login-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
