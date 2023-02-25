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
// const fs = require('fs') 
// const express = require('express');

// const app = express();

// app.use(express.json());

// const clothes = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/clothes-collection.json`))
// //get
// app.get('/api/clothes/products',(req,res)=>{
// res.status(200).json({
//     status: 'success',
//     results: clothes.length,
//     data:{
//         clothes
//     }
// })
// })

// app.get('/api/clothes/products/:id', (req,res)=>{
//     console.log(req.params);

//     const id = req.params.id * 1;
//     const cloth = clothes.find(el=> el.id === id)
//     res.status(200).json({
//         status: 'success',
       
//         data:{
//             cloth
//         }
//     })
//     })




// //post

// app.post('/api/clothes/products',(req,res)=>{
//     //console.log(req.body);

//     const newId = clothes[clothes.length - 1].id + 1;
//     const  newCloth = Object.assign({ id: newId },req.body);

//     clothes.push(newCloth);

//     fs.writeFile(
//         `${__dirname}/dev-data/data/clothes.collection.json`,
//         JSON.stringify(clothes),
//          err =>{
//         res.status(201).json({
//          status: 'success',
//          data:{
//                  cloth: newCloth
//             }
            
//          });
//     });
// });








// app.post('api/clothes/products',(req,res)=>{

//     const newId = clothes[clothes.length - 1].id+1;
//     const  newCloth = Object.assign({ id: newId },req.body);

//     clothes.push(newCloth);
//     fs.writeFile(`${__dirname}/dev-data/data/clothes.collection.json`, JSON.stringfy(clothes), err =>{
//         res.status(201).json({
//             status: 'success',
//             data:{
//                 clothes: newCloth
//             }

//         })

//     })
// })




// const  port =10000;
// app.listen(port,() =>{
//     console.log(`App running  on port ${port}...`);
// });