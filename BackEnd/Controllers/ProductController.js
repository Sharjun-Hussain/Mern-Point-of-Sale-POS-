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
            products
        })
    }catch(err){
        res.status(500).json({Message:"Internal Server Error"});
    }
}