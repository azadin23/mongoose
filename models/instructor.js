const mongoose = require('mongoose')

const Schema = mongoose.Schema;

var instructorSchema = new Schema({

    name: {type: String, minLength:1, maxLength:100, required:true},
    dateOfBirth: {type: Date, required:true},
    location: {type:String}
},  {timestamp:true}
);

    const InstructorsModels = mongoose.model('instructor', instructorSchema)

    module.exports = InstructorsModels
