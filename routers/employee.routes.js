const { Router } = require('express');
const employeeController = require('../controllers/employee.controllers');
const verifyPermission = require('../middlewares/verify.permission.middlewares');

const router = Router();

const userRoles = [ "ADMIN", "TL" ]

router.get('/getemployeedata', verifyPermission(userRoles),employeeController.getEmployeeData);

module.exports = router; 