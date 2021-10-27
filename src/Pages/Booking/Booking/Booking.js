import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return (
    <div>
      <img src={service?.img} alt="" />
      <h2>Service Name : {service?.name}</h2>
      <h2>Service Name : {service?.price}</h2>
    </div>
  );
};

export default Booking;
