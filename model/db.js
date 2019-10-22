const mongoose =require ('mongoose');

const url='mongodb://localhost:27017/crud';
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
    if (!err){
        console.log('Database successfully connected');
    }else{
        console.log('error in database conncection');
    }
});
require('./employeeModel');