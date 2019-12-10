require('./model/db');
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const exphbs=require('express-handlebars');
// const multer= require('multer');
// const upload = multer({dest: './uploads/'});
const app=express();
app.use(express.static(__dirname));
const employeeRouter=require('./route/employee');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layouts/'}));
app.set('view engine','hbs');
app.use('/employee',employeeRouter);

app.listen(8080,()=>{
    console.log('port is listening to 8080');
});
