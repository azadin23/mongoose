const mongoose = require('mongoose')

const Schema = mongoose.Schema


const participantSchema = new Schema({
    name: {type:String, required:true, minLength:1, maxLength:50},
    dateOfBirth: {type:Date, required:true},
    email: {type:String, maxLength:50},
    phone: {type:Number, maxLength:13},
    courses: [{
        type:Schema.Types.ObjectId,
        ref:'courses',
    }]

}, {timestamps:true})

const ParticipantsModels = mongoose.model('participants', participantSchema)

module.exports = ParticipantsModels