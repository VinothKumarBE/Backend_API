
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
