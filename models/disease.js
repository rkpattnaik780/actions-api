var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var diseaseSchema = new Schema({
    name: { type: String },
    symptoms: [{
        type: String
    }],
    complications: [{
        type: String
    }],
    causes: [{ type: String }],
    annual_deaths: { type: Number }
});

var diseaseModel = mongoose.model('disease', diseaseSchema);

module.exports = diseaseModel;