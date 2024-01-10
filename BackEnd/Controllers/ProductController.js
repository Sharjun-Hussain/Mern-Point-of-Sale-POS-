const productmodel = require('../Models/ProductModel')



exports.CreateProduct = (req,res,next) =>{

    try{
        const product = productmodel.create(req.body);
        res.status(201).json({
            Message:"Product Added SuccessFully!",
            product
        })
    }catch(err){
        res.status(500).json({Message:`Internal Server Error : ${err}`});
    }

}

exports.listProduct = (req,res,next)=>{
    try{
        const products = productmodel.find();
        res.status(200).json({
            
        })
    }catch(err){
        res.status(500).json({Message:"Internal Server Error"});
    }
}


exports.deleteProduct = (req,res,next) =>{

    const {_id} = req.body;
    try{
        const products = productmodel.deleteOne(_id)
        res.status(200).json({
            Message:"Product Deleted SuccesssFully!"
        })
    }catch(err){
        res.status(500).json({Message:"Internal Server Error"});
    }
}