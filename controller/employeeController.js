
const express=require('express');
const mongoose=require('mongoose');
const Employee=mongoose.model('Employee');

//function for render in home page
exports.create=(req,res)=>{
     res.render('employee/addOrEdit',{viewTitle:'Insert Or Update Here!'});
}

//export function for employee add
exports.add_employee=(req,res)=>{
     var employee =new Employee();
     employee.fullname=req.body.fullname;
     employee.email=req.body.email;
     employee.mobile=req.body.mobile;
     employee.city=req.body.city;
     employee.save((err,doc)=>{
          if(!err){
              
               res.redirect('/employee/list');
          }
          else{
               if(err.name=='ValidationError'){
               handleValidationError(err,req.body);
               res.render('employee/addOrEdit',{viewTitle:'Insert Employee',employee:req.body}); 
               }
               else{
                    console.log('error during record insertion: '+ err);
               }
             }
     });

}
exports.employee_list=(req,res)=>{
     Employee.find((err,data)=>{
      if(!err){
          res.render('employee/list',{viewTitle:'Employee List',list:data});
      }else{
           console.log('Error while reriving employeee data:'+err);
      }
     })
     
}


// creating a function which will used to show all error messages
function handleValidationError(err,body){
     for(field in err.errors)
     {
          switch(err.errors[field].path)
          {
               case 'fullname':
               body['fullNameError']=err.errors[field].message;
               break;
               case 'email':
               body['emailError']=err.errors[field].message;
               break;
               case 'mobile':
               body['mobileError']=err.errors[field].message;
               break;
               case 'city':
               body['cityError']=err.errors[field].message;
               break;
          }
     }

}