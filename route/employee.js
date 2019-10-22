var express=require('express');
const router=express.Router();
const employeeController=require('../controller/employeeController');

router.get('/',employeeController.create);
router.post('/',employeeController.add_employee);
router.get('/list',employeeController.employee_list);

module.exports=router;