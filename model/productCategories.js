const { default: mongoose } = require("mongoose");

const productCategoriesSchema = mongoose.Schema({
    name: {type: String, required: true, unique:[true, 'name must be a product category'], lowercase:true}
});

module.exports = mongoose.model('ProductCategories', productCategoriesSchema);