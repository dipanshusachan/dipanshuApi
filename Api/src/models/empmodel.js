var conn = require('../../config/dbconfig.js');

var Employee = function(employee){
    // this.id = employee.id;
    this.projectcode = employee.projectcode;
    this.facilitycode = employee.facilitycode;
    this.projectname = employee.projectname;
    this.clientname = employee.clientname;
    this.facilityname = employee.facilityname;
    this.facilityname = employee.facilityname;
    this.creoprojectcode = employee.creoprojectcode;
    this.componentlibrary = employee.componentlibrary;
}

//for fetching the all data
Employee.getAllEmployees = (result) => {
    conn.query('SELECT * FROM employee', (err,res) => {
        if(err){
            console.log('Error while Fetching The Data', err);
            result(null,err);
        }
        else{
            console.log('Employee fetched successfully');
            result(null,res);
        }
    })
}

// get employee by ID from DB
Employee.getEmployeeByID = (id, result)=>{
    conn.query('SELECT * FROM employee WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

//for creating data
Employee.createEmployee = (employeeData, result) => {
    conn.query('INSERT INTO employee SET ?', employeeData, (err, res) => {
        if(err){
            console.log('Error while inserting the data', err);
            result(null, err);
        }
        else{
            console.log('Employee Inserted Successfully');
            result(null,res);
        }
    })
}

// update data empmodel
Employee.updateEmployee = (id, employeeData, result)=>{
    conn.query("UPDATE employee SET projectcode=?,facilitycode=?,projectname=?,clientname=?,facilityname=?,creoprojectcode=?,componentlibrary=? WHERE id = ?",
     [employeeData.projectcode,employeeData.facilitycode,employeeData.projectname,employeeData.clientname,employeeData.facilityname,employeeData.creoprojectcode,
        employeeData.componentlibrary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("Employee updated successfully");
            result(null, res);
        }
    });
}

// delete
// Employee.deleteEmployee = (id, result)=>{
//     conn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
//         if(err){
//             console.log('Error while deleting the employee');
//             result(null, err);
//         }else{
//             result(null, res);
//         }
//     });}
// conn.query("DELETE from employee WHERE id = ?", [1, id], (err, res)=>{
//         if(err){
//             console.log('Error while deleting the employee');
//             result(null, err);
//         }else{
//             console.log("Employee deleted successfully");
//             result(null, res);
//         }
//     });
// }



module.exports = Employee;




    // exports.updateEmployee = (req, res)=>{
    //     const employeeData = new EmpModel(req.body);
    //     console.log('employeeData update', employeeData);
    //     check null
    //     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    //         res.send(400).send({success: false, message: 'Please fill all fields'});
    //     }else{
    //         EmpModel.updateEmployee(req.params.id, employeeData, (err, employee)=>{
    //             if(err)
    //             res.send(err);
    //             res.json({status: true, message: 'Employee updated Successfully'})
    //             res.send(employee)
    //         })
    //     }
    // }