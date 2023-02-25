const mongoose  = require('mongoose');
const dotenv = require('dotenv');
const  app = require('./app');

dotenv.config({path:'./.env'});

const DB = process.env.DATABASE;

mongoose
.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
 // useFindAndModify: false
}).then(()=>console.log('DB connection succesfully😎'));
//mongoose.connect('mongodb://127.0.0.1:27017/test')
const  port  = process.env.PORT || 9000;
app.listen(port,() =>{
    console.log(`App running on port ${port}...`);
})
