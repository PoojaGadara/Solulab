const categoryModel = require('../models/categoryModel')
const Errorhandler = require('../utills/errorHandler')
const catchAsyceError = require('../middleware/catchAsyncError')

//get All category
exports.getAllcategory =  async (req,res,next) => {

    console.log( req.body.user)
    const categoryCount = await categoryModel.countDocuments()
    const resultPerPage = 5;
    const apiFeatuer = new ApiFeatures(categoryModel.find(),req.query)
    .search()
    .filter()
    .pagination(resultPerPage)
    const categorys= await apiFeatuer.query;
    res.status(200).json({
       success:true,
       categorys
    })
}

//create Category 
exports.createCategory =catchAsyceError( async (req,res) => {

    //send data to category collection
    const category = await categoryModel.create(req.body);
    return res.status(201).json({
        success:true,
        data : category
    })
});

//Get Category Details
exports.getCategoryDetails =catchAsyceError(async (req,res,next) => {
    
    const category = await categoryModel.findById(req.params.id)

    if(!category){
        return next(new Errorhandler("category Not Found" , 404))
    }

    res.status(200).json({
        success:true,
        data : category
    })
});

//Update category 
exports.updateCategory = catchAsyceError(async (req,res,next) => {

    let category = await categoryModel.findById(req.params.id)
    
    category = await categoryModel.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify: false
    })

    res.status(200).json({
        success:true,
        data : category
    })

    if(!category){
        return next(new Errorhandler("Category Not Found" , 404))
    }
});

//Delete category
    exports.deleteCategory = catchAsyceError(async (req,res,next) => {

        const category = await categoryModel.findById(req.params.id)
        
        if(!category){
            return next(new Errorhandler("category Not Found" , 404))
        }
        await category.remove()

        res.status(200).json({
            success:true,
            message : 'Category deleted Succesfully'
        })
    });

//List All Category
    exports.listCategory = catchAsyceError(async (req,res,next) => {

        const category = await categoryModel.find({})
        
        if(!category){
            return next(new Errorhandler("Category Not Found" , 404))
        }

        res.status(200).json({
            success:true,
            data : category
        })
    });


