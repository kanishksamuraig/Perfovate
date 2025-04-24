import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import "./QuotationForm.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  mobile: yup
    .string()
    .matches(/^\d{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const QuotationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Here you can make an API call or handle data retrieval
  };

  return (
    <Card className="quotation-card">
      <CardContent>
        <h2 className="form-title">Get a Quotation</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <div className="form-group">
            <Input type="text" placeholder="Name" {...register("name")} className="input-field" />
            <p className="error-message">{errors.name?.message}</p>
          </div>

          <div className="form-group">
            <Input type="text" placeholder="Mobile Number" {...register("mobile")} className="input-field" />
            <p className="error-message">{errors.mobile?.message}</p>
          </div>

          <div className="form-group">
            <Input type="email" placeholder="Email" {...register("email")} className="input-field" />
            <p className="error-message">{errors.email?.message}</p>
          </div>

          <Button type="submit" className="submit-button">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuotationForm;
