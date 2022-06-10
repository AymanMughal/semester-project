import express from 'express';
import { getApplication, postApplication, deleteApplication, updateApplication } from '../controllers/applicationController.js';

const router = express.Router();


//get, post, put, delete
router.get("/", getApplication);

router.post("/", postApplication);

router.put("/", updateApplication);

router.delete("/", deleteApplication);

export default router;
