import User from "../models/user"
import { hashPassword, comparePassword } from "../utils/auth";

export const signup = async (req,res)=> {
    //console.log("Register Endpoint =>", req.body);
    const {name, email, password}=req.body;
    
    //validations

    if(!name) return res.status(400).send('Name is required')
    if(!email) return res.status(400).send('Email is required')
    if(!password) return res.status(400).send('Password is required')
    if(password.length<6) return res.status(400).send('Password should atleast be 6 characters')

    //if email already exsists 

    const exist = await User.findOne({email});
    if(exist) {return res.status(400).send("Email aleady exists, kindly login.")}

    //password ko hash karta 
    const hashedPassword = await hashPassword(password);

    const user = new User({name, email, password:hashedPassword})
    try {
        await user.save();
        console.log("Required User => ", user);
        return res.json({ok:true});
        } catch(error){
        console.log("Resgistration failed ==>", error)
        return res.status(400).send("Error, try again")
    }

}