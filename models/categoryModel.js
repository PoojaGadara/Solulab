const mongoose = require('mongoose');

const catgorySchema =  mongoose.Schema({

   categoryId:{
        type:String,
        required:[true,'Enter product ID']
    },
    categoryName:{
        type:String,
        required :[true,'Please Enter product Name']
    }
});
const categoryModel = new mongoose.model("category",catgorySchema)

module.exports = categoryModel;