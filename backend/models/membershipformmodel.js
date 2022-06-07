import mongoose from "mongoose";

const formStructure = mongoose.Schema({
  FirstName: String,
  LastName: String,
  Password: String,
  BirthDay: String,
  PhoneNumber: String,
  Email: String,
  Gender: String,
});

const membershipformmodel = mongoose.model("membershipform", formStructure);

export default membershipformmodel;
