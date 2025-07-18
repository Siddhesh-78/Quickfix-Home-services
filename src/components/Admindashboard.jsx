import "./css/Admindashboard.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Admindashboard = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admindashboard");
      setdata(res.data);
    }catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="admindashboard-title">
        Admindashboard: View new bookings
      </h1>
      <div className="admindashboard">
        <div className="admindashboard-container">
          <table cellPadding={10} cellSpacing={10} border={1}>
            <thead>
              <tr>
                <td>Service</td>
                <td>name</td>
                <td>email</td>
                <td>phone</td>
                <td>Address</td>
                <td>status</td>
                <td>Action</td>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.service_type || "N|A"}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobilenumber}</td>
                    <td>{item.address}</td>
                    <td>{item.servicedate}</td>
                    <td>
                      <button>Accept</button>
                      <button>Reject</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    No bookings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admindashboard;
