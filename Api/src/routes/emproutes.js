const express = require('express');
const router = express.Router();

const EmpController = require('../controllers/empcontroller.js');

//get data router
router.get('/', EmpController.getEmployeeList);

// get employee by ID
router.get('/:id',EmpController.getEmployeeByID);

//create router
router.post('/', EmpController.createNewEmployee);

// update router
router.put('/:id', EmpController.updateEmployee);


// router.delete('/:id',EmpController.deleteEmployee);
module.exports=router;