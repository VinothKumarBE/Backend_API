const products = require('./../model/product');


//getall

exports.getAllClothes = async (req,res) =>{
try{
   const cloths = await products.find()
     
    res.status(200).json({
        status: 'success',
        results: cloths.length,
        data:{

              cloths
        }
    });

}catch(err){


    res.status(404).json({
        status: 'fail',
        message: err
    });
}
    
};

//get cloth

exports.getCloth = async (req,res) =>{
   try{
    const cloth= await products.findById(req.params.id);

    res.status(200).json({
         status: 'success',
         data:{
                 cloth
        }
    });
}catch(err){
    res.status(404).json({
        status: 'fail',
        message: err
    })

}
}

//post 
exports.addClothes= async (req, res)=>{ 
    try{
        
       const newCloth = await  products.create(req.body)
        res.status(201).json({
            status: 'success',
            data:{
                cloth: newCloth
            }
        });

    }catch(err){
        res.status(400).json({
            status:'fail',
            message: err
        })

    }
};