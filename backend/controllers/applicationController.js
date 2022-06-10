import hostelApplicationModel from "../models/applicationModel.js";

export const getApplication = async (req, res) => {
  try {
    const hostelApplications = await hostelApplicationModel.find();
    res.json(hostelApplications);
  } catch (error) {
    console.log("Not found any data.");
  }
};

export const postApplication = async (req, res) => {
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

export const updateApplication = async (req, res) => {
  try{
    const pid=req.body.pid;
    const FullName = req.body.FullNmae; 
    const Password= req.body.Password;
    const Email =req.body.Email;
    const UserName = req.body.Username;
    const PhoneNumber = req.body.PhoneNumber;
  
    await Product.update({prodId : pid}, {$set :{
        title : title, category:category, desc: desc, brand: brand, price : price, quantity : quantity}})
        .then(result =>{                               
            return res.status(200).json({ status: 200, data: result });
        })        
}   
catch(e) {
    console.log(e)
    return res.status(400).json({status : 400, message : e.message});
}
};
export const deleteApplication = async (req, res) => {
  try{
    var id= (req.params.prodId).slice(1);
    await Product.deleteOne({prodId : id}, function(err, result){
        if(err){
            return res.status(400).json('Error : ' + err)
        }
        else{
            return res.json('Product deleted !');
        }
    })
}   
catch(e){
    return res.status(400).json({ status: 400, message: e.message });
}
};