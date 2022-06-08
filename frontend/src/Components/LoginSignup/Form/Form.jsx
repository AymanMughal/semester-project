import React from "react";
import "./Form.css";
import * as yup from "yup";
import { useFormik, Formik, ErrorMessage } from "formik";
import { addApplicant } from "../../../Service/api";

const validationSchema = yup.object({
  FirstName: yup.string().required("Name is Required!"),
  LastName: yup.string().required("Name is Required!"),

  Password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is Required!"),

  BirthDay: yup.string().required("Please enter your Date Of Birth!"),

  PhoneNumber: yup.string().required("Phone is Required!"),

  Gender: yup.string().required("Gender is Required!"),

  Email: yup.string().required("Email is Required!"),
});
const renderError = (message) => <p className="help is-danger">{message}</p>;

function Form() {
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Password: "",
      BirthDay: "",
      Email: "",
      Gender: "",
      PhoneNumber: "",
    },
   
    onSubmit: async (values,{resetForm}) => { 
      await addApplicant(values);
      resetForm({values:''});
     },
  });






  return (
    <Formik validationSchema={validationSchema}>
      <div className="col-12 formi">
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
                  <h1 className="heading">Become a Member</h1>

                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="firstname">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="FirstName"
                        onChange={formik.handleChange}
                        value={formik.values.FirstName}
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="First Name"
                    
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="lastname">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="LastName"
                        onChange={formik.handleChange}
                        value={formik.values.LastName}
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Last Name"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="password">
                        Password
                      </label>
                      <input
                        name="Password"
                        type="password"
                        id="lastName"
                        className="form-control form-control-lg"
                        placeholder="Password123"
                        onChange={formik.handleChange}
                        value={formik.values.Password}
                        
                      />

                      <ErrorMessage name="name" render={renderError} />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 d-flex align-items-center">
                    <div className="form-outline datepicker w-100">
                      <label for="birthdayDate" className="form-label">
                        Birthday
                      </label>

                      <input
                        name="BirthDay"
                        type="date"
                        className="form-control form-control-lg"
                        id="birthdayDate"
                        placeholder="M/D/y"
                        onChange={formik.handleChange}
                        value={formik.values.BirthDay}
                       
                      />

                      {/* <NErrorMessage name="birthday" /> */}
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <h6 className="mb-2 pb-1">Gender: </h6>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Gender"
                        id="female"
                        onChange={formik.handleChange}
                        value="Female"
                        checked
                     
                      />
                      <label className="form-check-label" for="male">
                        Male
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Gender"
                        id="female"
                        onChange={formik.handleChange}
                        value="Female"
                       
                      />
                      <label className="form-check-label" for="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row" style={{ fontFamily: "sans-serif" }}>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label" for="EmailAddress">
                        Email
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="Email"
                        onChange={formik.handleChange}
                        value={formik.values.Email}
                        className="form-control form-control-lg"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Email Address"
                      />

                      {/* <NErrorMessage name="email" /> */}
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label" for="phoneNumber">
                        Phone Number
                      </label>
                      <input
                        name="PhoneNumber"
                        type="tel"
                        id="phoneNumber"
                        className="form-control form-control-lg"
                        onChange={formik.handleChange}
                        value={formik.values.PhoneNumber}
                        placeholder="Enter your Mobile Number"
                        
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn my-3 btn-lg"
                    style={{ backgroundColor: "pink" }}
               
                  />
                  
            
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}

export default Form;
