const EmployeeData = require("../models/employee.models");

// controller actions
module.exports.getEmployeeData = async (req, res) => {
    try {
        const employeeList = await EmployeeData.find({});
        res.status(200).json(employeeList);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}





