import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/service", data).then((res) => {
      if (res.data.insertedId) {
        alert("successfully add");
        reset();
      }
      console.log(res);
    });
  };
  return (
    <div className="add-service">
      <h2>Please add your service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="test"
          placeholder="your name"
          {...register("name")}
        />
        <textarea {...register("description")} placeholder="description" />
        <input type="number" {...register("price")} placeholder="price" />
        <input type="text" placeholder="img url" {...register("img")} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
