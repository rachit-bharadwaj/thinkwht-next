const mongoose = require('mongoose')
const {Schema} = mongoose

const studentSchema = new Schema(
    {
        name:
        {
            type:String
        },
        mobile:
        {
            type:Number
        },
        email:
        {
            type:String
        },
        courses:
        {
           type:String
        },
        courseID:
        {
             type:String
        },
        transactionID:
        {
            type:String,
            default:''
        },
        isVerified:
        {
            type:Boolean,
            default:0
        },
        
  verifyingadmin:
        {
            type:String,
            default:''
        },
    
        studentID:
        {
            type:String
        },
        college:
        {
            type:String
        },
        time :
         { type : Date, default: Date.now }
    }
    
)
mongoose.models={}
module.exports = mongoose.model("studentModel",studentSchema)