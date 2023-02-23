//const fs = require('fs');
const express = require ('express');
const morgan = require ('morgan');
const clothRouter = require('./route/clothroute');

const app = express();
app.use(express.json());

console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(morgan('dev'));

app.use((req,res,next)=>{
    console.log("hello from the midlleware 🙌");
    next();
})

app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next()
});


app.use('/api/products/clothes',clothRouter);  

module.exports = app;





//app.get ('/api/products/clothes', getAllClothes)

//app.get (, )






//--------------------------------------------------

//post 
// app.post('/api/products/clothes',(req, res)=>{ 
//  //console.log(req.body)
//  const newId = clothes[clothes.length - 1].id + 1;
//  const newCloth = Object.assign({id: newId},  req.body);
//  clothes.push(newCloth);
//  fs.writeFile(`${__dirname}/dev-data/data/clothes-collection.json`, JSON.stringify(clothes) , err =>{
//         res.status(201).json({
//         status: 'success',
//         data:{
//             clothes: newCloth
//         }
//     });
// }
// );
// });

