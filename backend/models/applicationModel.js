import mongoose from 'mongoose';

const hostelApplicationStructure = mongoose.Schema({
    FirstName:String ,
      LastName:String ,
      Password: String,
      BirthDay:String ,
      Email:String ,
      Gender: String,
      PhoneNumber:String ,
});

const hostelApplicationModel = mongoose.model('hostelApplication',hostelApplicationStructure);

export default hostelApplicationModel;