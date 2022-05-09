const mongoose = require('mongoose');

const studentDetailsSchema =mongoose.Schema({
    studentName:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    rollNumber:{
        type:Number,
        required:true
    }

})
mongoose.model('Details',studentDetailsSchema);