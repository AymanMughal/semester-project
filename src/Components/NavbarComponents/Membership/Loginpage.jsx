import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import "./../../Styles/Loginpage.css";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",

      password: "",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required("Name is required")
        .min(5, "Minimum 5 characters required")
        .max(15, "Maximum 15 characters only"),
      email: yup.string().email().required("Email is required"),

      password: yup.string().required("Password is required"),
    }),
    // validate,
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });

  return (
    <div className="col-12 ">
      <div className=" col-6 py-5 h-100 formh ">
        <div className="row justify-content-center align-items-center h-100">
          <div
            className="card shadow-2-strong card-registration"
            style={{
              borderRadius: "15px",
              backgroundColor: "orange",
              width: "100%",
              height: "100%",
            }}
          >
            <form onSubmit={formik.handleSubmit}>
              <div className="row" style={{ fontFamily: "roboto" }}>
                <h1 className="heading">Welcome Back</h1>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label>username:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                    />
                    {formik.errors.username ? (
                      <div className="text-danger">
                        {formik.errors.username}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label>Email:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label>Password:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {formik.errors.password ? (
                      <div className="text-danger">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="loginbutton">
                  <Link to="/">
                    <button className="btn " id="loginbutton1">Login</button>
                  </Link>
                  <Link to="/signup"><button className="btn " id="loginbutton2">SignUp</button></Link>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
