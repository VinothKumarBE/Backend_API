const fs = require ('fs');

const clothes = JSON.parse (fs.readFileSync(`${__dirname}/../dev-data/data/clothes-collection.json`));

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