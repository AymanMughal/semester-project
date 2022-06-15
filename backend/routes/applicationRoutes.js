import express from 'express';
import { getApplication, postApplication, deleteApplication, updateApplication,getApplicationById, Login ,verifiedToken} from '../controllers/applicationController.js';

const router = express.Router();




//get, post, put, delete
router.get("/viewApplicants", getApplication);

router.get("/viewApplicants/:id", getApplicationById);

router.post("/postApplication", postApplication);

router.post("/postLogin", Login);

router.put("/updateApplicants/:id", updateApplication);


router.delete("/deleteApplicants/:id", deleteApplication);
 
export default router;

