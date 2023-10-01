const { default: mongoose } = require("mongoose");

const userTypeSchema = mongoose.Schema({
    name: {type: String, required: true, unique:[true, 'name must be a user-type'], lowercase:true}
});

module.exports = mongoose.model('UserType', userTypeSchema);