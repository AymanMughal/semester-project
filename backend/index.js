import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import hostelApplications from './routes/applicationRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;
const url ="mongodb+srv://asjad:123@cluster0.any5o.mongodb.net/?retryWrites=true&w=majority";



mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => console.log("Connected to the database."));

if (process.env.NODE_ENV==='production'){}
app.use(express.static('frontend/build'));

app.listen(5000);

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json( { extended: true } ));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use("/ichiraku", hostelApplications);