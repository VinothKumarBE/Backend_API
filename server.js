const mongoose  = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});
const  app = require('./app');


const DB=process.env.DATABASE;

mongoose.connect(DB).then(()=>console.log('DB connection succesfully'));

const clothSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true,'a cloth  must have  a name'],
        unique: true,
        trim: true
      },
      categories:{
        type: String,
        required: [true,'a tour  must have  a categories'],
        unique: true
      },
      sizeAvailable:{
        type: Number,
        required: [true,'a cloth  must have  a Size'],
        unique: true
      },
        price:{
        type: Number,
        required:[true, " A cloth must have a price"]
      },
        imageCover:{
        type: String,
        required:[true, 'A cloth must have img']
        
      },
      images:[String],
      createdAt:{
        type: Date,
        default: Date.now()
      },
      startDates: [Date]
    
    });
    const Cloth = mongoose.model('Cloth', clothSchema);
    
  
    




//mongoose.connect('mongodb://127.0.0.1:27017/test')
const  port  = process.env.PORT|| 9000;
app.listen(port,() =>{
    console.log(`App running on port ${port}...`);
})
