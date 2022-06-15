import mongoose from "mongoose";

const hostelApplicationStructure = mongoose.Schema({
  FullName: { type: String, required: [true, "please add your email"] },
  Username: {
    type: String,
    unique: true,
    required: [true, "please add your email"],
  },
  Password: { type: String, required: [true, "please add your email"] },
  Email: {
    type: String,
    unique: true,
    required: [true, "please add your email"],
  },
  PhoneNumber: { type: String, required: [true, "please add your email"] },
});

const hostelApplicationModel = mongoose.model(
  "hostelApplication",
  hostelApplicationStructure
);

export default hostelApplicationModel;
