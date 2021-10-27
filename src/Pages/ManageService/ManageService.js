import React, { useEffect, useState } from "react";

const ManageService = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/service/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("deleted successfully");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <>
      <div>
        <h2>Manage Services</h2>
        <div>
          {services?.map((service) => (
            <div key={service._id}>
              <h3>{service?.name}</h3>
              <button onClick={() => handleDelete(service._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageService;
