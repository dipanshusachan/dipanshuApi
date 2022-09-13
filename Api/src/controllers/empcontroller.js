const { response } = require('express');
const EmpModel = require('../models/empmodel.js');


exports.getEmployeeList = (req,res) => {
    EmpModel.getAllEmployees((err, employees) => {
        console.log('Hello');
        if(err)
        res.send(err);
        console.log('Employees',employees);
        res.send(employees)
    })
}

// get employee by ID
exports.getEmployeeByID = (req, res)=>{
    //console.log('get emp by id');
    EmpModel.getEmployeeByID(req.params.id, (err, employees)=>{
        if(err)
        res.send(err);
        console.log('single employee data',employees);
        res.send(employees);
    })
}


//For Inserting data
exports.createNewEmployee = (req, res) => {
    const employeeData =new EmpModel(req.body);
    console.log('employeeData', employeeData);

    EmpModel.createEmployee(employeeData, (err, employee) => {
        if(err)
        res.send(err);
        // res.json({status: true , message: 'Employee Created Successfully', data: employee.insertId})
        res.send(employee)
    })
}

// update data
// exports.updateEmployee = (req, res)=>{
//     const employeeData = new EmpModel(req.body);
//     console.log('employeeData update', employeeData);
//     // check null
//     // if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//     //     res.send(400).send({success: false, message: 'Please fill all fields'});
//     // }else{
//         EmpModel.updateEmployee(req.params.id, employeeData, (err, employee)=>{
//             if(err)
//             res.send(err);
//             // res.json({status: true, message: 'Employee updated Successfully'})
//             res.send(employee)
//         })
//     }

//update data empcontroller
        exports.updateEmployee = (req, res)=>{
        const employeeData = new EmpModel(req.body);
        console.log('employeeData update', employeeData);
        // check null
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            res.status(400).send({success: false, message: 'Please fill all fields'});
        }else{
            EmpModel.updateEmployee(req.params.id, employeeData, (err, employee)=>{
                if(err)
                res.send(err);
                res.json({status: true, message: 'Employee updated Successfully'})
                // res.send(employee)
            })
        }
    }

    // exports.deleteEmployee = (req, res)=>{
    //     EmpModel.deleteEmployee(req.params.id, (err, employee)=>{
    //         if(err)
    //         res.send(err);
    //         res.json({success:true, message: 'Employee deleted successully!'});
    //         res.send(employee)
    //     })
    // }


