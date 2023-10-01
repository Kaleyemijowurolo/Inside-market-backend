const { default: mongoose } = require("mongoose");

const adminRolesSchema = mongoose.Schema({
    role: {type: String, required: true, unique:[true, 'name must be a role']}
});

module.exports = mongoose.model('AdminRoles', adminRolesSchema);