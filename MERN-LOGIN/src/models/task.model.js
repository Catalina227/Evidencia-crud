import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description : {
        type : String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    
    },
    user:{
        type: String,
        ref: 'User',
        require:true 

    }
}, {    
    timestamps: true
})

export default mongoose.model('task', taskSchema);