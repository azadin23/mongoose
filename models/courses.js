const mongoose = require('mongoose')

const Schema = mongoose.Schema


const coursesSchema = new Schema({
    title: {type:String, required:true, minLength:1, maxLength:50},
    description: {type:String, required:true, minLength:1, maxLength:500},
    instructor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "instructor",
        required:true
    }],
    scheduledDateTime:{type:Date, required:true}
}, {timestamps:true});
    
    const CoursesModels = mongoose.model('courses', coursesSchema)

    module.exports = CoursesModels