const productModel = require('../models/productModel')
const Errorhandler = require('../utills/errorHandler')
const catchAsyceError = require('../middleware/catchAsyncError')


//Get All Products
exports.listProduct =catchAsyceError(async (req,res,next) => {

    const product = await productModel.find().populate("categoryId")
    if(!product){
        return next(new Errorhandler("product Not Found" , 404))
    }

    res.status(200).json({
        success:true,
        data : product
    })
});

//create product 
exports.createproduct =catchAsyceError( async (req,res) => {

    const productCount = await productModel.countDocuments()
    const product = await productModel.create(req.body);
    return res.status(201).json({
        success:true,
        data : product , productCount
    })
});

//Get product Details
exports.getproductDetails =catchAsyceError(async (req,res,next) => {
    const product = await productModel.findById(req.params.id)

    if(!product){
        return next(new Errorhandler("product Not Found" , 404))
    }

    res.status(200).json({
        success:true,
        data : product
    })
});

//Update product 
exports.updateproduct = catchAsyceError(async (req,res,next) => {

    let product = await productModel.findById(req.params.id)
    
    product = await productModel.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify: false
    })

    res.status(200).json({
        success:true,
        data : product
    })

    if(!product){
        return next(new Errorhandler("product Not Found" , 404))
    }
});

//Delete product
exports.deleteproduct = catchAsyceError(async (req,res,next) => {

    const product = await productModel.findById(req.params.id)
        
    if(!product){
            return next(new Errorhandler("product Not Found" , 404))
    }
    
    await product.remove()

    res.status(200).json({
         success:true,
         message : 'product deleted Succesfully'
    })
});

exports.lookupTabel =catchAsyceError(async (req,res,next) => {

//lookup Query for Fetch Data from both Table
    productModel.aggregate([
            {
                $lookup:
                {
                    from: 'categories',
                    localField : 'categoryId',
                    foreignField  : '_id',
                    as : 'output'
                 }
            }
    ]).then(result => res.send(result)).catch(err => console.log(err));

})