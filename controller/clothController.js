const products = require('./../model/product');


//get cloth
exports.getAllClothes = (req,res) =>{
    res.status(200).json({
        status: 'success',
        results: clothes.length,
        resultAt: Date(),
        data:{

              clothes
        }
    });
}

//get cloth id
exports.getCloth = (req,res) =>{
    //console.log(req.params)
    const  id = req.params.id*1;
    const cloth = clothes.find(el =>el.id ===id)
    res.status(200).json({
         status: 'success',
        results: clothes.length,
        resultAt: req.requestTime,
        data:{

            cloth
        }
    });
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