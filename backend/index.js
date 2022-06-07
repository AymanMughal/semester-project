import  express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import membershipformroute from "./routes/membershipformroute.js"
 const app=express();
const url ="mongodb+srv://asjad:123@cluster0.any5o.mongodb.net/ichirakuramen?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("Database Connected"));
app.listen(5000);
app.use(cors());
app.use(bodyParser.json( { extended: true } ));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use("/membership", membershipformroute);
// app.use("/viewApplicants", hostelApplications);