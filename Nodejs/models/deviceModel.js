var mongoose = require('mongoose');
var deviceSchema = require('../schemas/deviceSchema');

var Device = mongoose.model('devices', deviceSchema);

module.exports = Device;