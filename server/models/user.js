import mongoose from "mongoose";


const {Schema}= mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true, 
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 70

    },
    email: {
        type: String,
        trim: true, 
        required: true,
        unique: true
    },
    
    about: {
        //adding custom bio
    },
    photo: String,// bad mein store ka dekhta

    //array for the list of users to be stored here
    following: [{type:Schema.ObjectId, ref: "User"}],
    followers: [{type:Schema.ObjectId, ref: "User"}]

}, {timestamps: true});





export default mongoose.model('User',userSchema);




 