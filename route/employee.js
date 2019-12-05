var express=require('express');
const router=express.Router();
const employeeController=require('../controller/employeeController');

router.get('/',employeeController.create);
router.post('/',employeeController.add_employee);
router.get('/list',employeeController.employee_list);
router.get('/:id',employeeController.edit_employee);
router.get('/delete/:id',employeeController.delete_employee);

module.exports=router;