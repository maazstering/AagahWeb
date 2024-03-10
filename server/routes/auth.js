import express from 'express';
import { signup } from '../controllers/auth';

const router = express.Router();


//routes 
router.post("/signup", signup);

module.exports = router; 

