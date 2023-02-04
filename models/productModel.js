const mongoose = require('mongoose');

const productSchema =  mongoose.Schema({

   productId:{
        type:String,
        required:[true,'Enter product ID']
    },
    productName:{
        type:String,
        required :[true,'Please Enter Product Name']
    },
    qtyPerUnit :{
        type:Number,
        required : [false,'Please Enter product Price']
    },
    unitPrice :{
        type:Number,
        default : 0
    },
    unitInStock :{
            type:String,
            required:[false,'Please Enter Unit In Stock']
    },
    discontinued :{
        type:Boolean,
        required:true
    },
    categoryId: {
       type: mongoose.Types.ObjectId,
        ref: "category",
        required:[false,'Please Enter Catgory Id']
      },
    createdAt:{
        type:Date,
        default:Date.now()
    }    
});
const productModel = new mongoose.model("product",productSchema)

module.exports = productModel;