import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Fotter from "./components/Fotter";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import "./App.css";
import Login from "./components/Login";
import Plumber from "./components/Plumber";
import Plumberbooks from "./components/Plumberbooks";
import Electrician from "./components/Electrician";
import Electricianbooks from "./components/Electricianbooks";
import Cleaning from "./components/Cleaning";
import Cleaningbooks from "./components/Cleaningbooks";
import Installation from "./components/Installation";
import Admin from "./components/Admin";
import Admindashboard from "./components/Admindashboard";
import { Toaster } from "react-hot-toast";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Fotter />
        </>
      ),
      errorElement: (
        <>
          <Navbar />
          <Errorpage />
          <Fotter />
        </>
      ),
    },
    {
      path: "/services",
      element: (
        <>
          <Navbar />
          <Services />
          <Fotter />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
          <Fotter />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar />
          <Signup />
          <Fotter />
        </>
      ),
    },
    {
      path: "/plumber",
      element: (
        <>
          <Navbar />
          <Plumber />
          <Fotter />
        </>
      ),
    },
    {
      path: "/plumberbooks",
      element: (
        <>
          <Navbar />
          <Plumberbooks />
          <Fotter />
        </>
      ),
    },
    {
      path: "/electrician",
      element: (
        <>
          <Navbar />
          <Electrician />
          <Fotter />
        </>
      ),
    },
    {
      path: "/electricianbooks",
      element: (
        <>
          <Navbar />
          <Electricianbooks />
          <Fotter />
        </>
      ),
    },
    {
      path: "/cleaning",
      element: (
        <>
          <Navbar />
          <Cleaning />
          <Fotter />
        </>
      ),
    },
    {
      path: "/cleaningbooks",
      element: (
        <>
          <Navbar />
          <Cleaningbooks />
          <Fotter />
        </>
      ),
    },
    {
      path: "/installation",
      element: (
        <>
          <Navbar />
          <Installation />
          <Fotter />
        </>
      ),
    },
    {
      path: "/admin",
      element: (
        <>
          <Navbar />
          <Admin />
          <Fotter />
        </>
      ),
    },
     {
      path: "/admindashboard",
      element: (
        <>
          <Navbar />
          <Admindashboard />
          <Fotter />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1a1a1a",
            color: "#00ffcc",
          },
          success: {
            icon: "✅",
          },
          error: {
            icon: "❌",
          },
        }}
      />
    </>
  );
}
export default App;
