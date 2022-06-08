import hostelApplicationModel from "../models/hostelApplication.js";

export const getApplications = async (req, res) => {
  try {
    const hostelApplications = await hostelApplicationModel.find();
    res.json(hostelApplications);
  } catch (error) {
    console.log("Not found any data.");
  }
};

export const createApplication = async (req, res) => {
  const result=req.body;
  console.log(result)
    const newApplicant = new hostelApplicationModel(
        req.body
        //{ fname:req.body.fname,
        // email: req.body.email,
        // gender: req.body.gender}
    );

    try {
        await newApplicant.save();
        res.json(newApplicant);
    } catch (error) {
        console.log("Not saved...");
    }
};
