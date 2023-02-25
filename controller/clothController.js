//const fs = require ('fs');
//const Cloth = require('./../controller/clothController')
const products = require('./../model/product');

//const clothes = JSON.parse (fs.readFileSync(`${__dirname}/../dev-data/data/clothes-collection.json`));

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