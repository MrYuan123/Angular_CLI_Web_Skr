const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let deviceSchema = new Schema({
    id: {
        type: String,
        required: "id is required"
    },
    user_id:{
        type: String,
        required: "user_id is required"
    },
    name: {
        type: String,
        required: "name is required"
    },
    deviceType: {
        type: String,
        required: "deviceType is required"
    },
    location: {
        type: String,
        required: "location is required"
    }
},  {
    versionKey: false
});

module.exports = deviceSchema;