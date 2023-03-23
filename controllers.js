
const logger = require("./logger")
const Employee = require("./db_model")

//  Function creates a new employee record
const addNew = async (req, res) => {
    try {
        // detructure body items frtom cient
        let = { firstname, lastname, surname, email, contact, city, postal_address, nationality, gender, national_id, department, position, salary } = req.body
        //  check for kissing fields
        if (!firstname || !lastname || !surname || !email || !contact || !city || !postal_address || !nationality || !gender || !national_id || !department || !position || !salary) {
            // if some fields are missing return error bad reqi=uest, log error and exit functionres.status(400).json({ message: "Some fields are missing" })
            logger.info("An error occured due to missing fileds in the request")
            return
        }
        // check if employee exists with the given email. If exists, return bad request error and exit function
        let existing_employee = await Employee.findOne({ email: email })
        if (existing_employee) {
            res.status(400).json({ message: "Employee with that email exists" })
            logger.info("Tried adding employee with existings email")
            return
        }

        // check if employee exists with the given contact. If exists, return bad request error and exit function
        existing_employee = await Employee.findOne({ contact: contact })
        if (existing_employee) {
            res.status(400).json({ message: "Employee with that contact exists" })
            logger.info("Tried adding employee with existings contact")
            return
        }

        // check if employee exists with the given national id. If exists, return bad request error and exit function
        existing_employee = await Employee.findOne({ national_id: national_id })
        if (existing_employee) {
            res.status(400).json({ message: "Employee with that ID/passsport exists" })
            logger.info("Tried adding employee with existing national id")
            return
        }
        // if all conditons are metu save new employee and return success messdage
        const newEmployee = await new Employee({ firstname, lastname, surname, email, contact, city, postal_address, nationality, gender, national_id, department, position, salary }).save()
        res.status(200).json({ message: `New employee has been creacted id: ${newEmployee.id}` })
        logger.info(`Saved a new employee ${newEmployee.id}`)

    } catch (error) {
        logger.error(`Could not add new employee due to ${error}`)
        res.status(500).json({ message: "An error occured" })
    }
}

// get all employees
const getAll = async (req, res) => {
    try {
        // fetch all employee records
        const employees = await Employee.find()
        // if array of the records is empty return not found error
        if (employees.length == 0) {
            res.status(404).json({ message: "No employee records exist" })
            logger.info("Get all employees request found no records")
        } else {
            // else send the list of employees
            res.status(200).send(employees)
            logger.info("Employees list requested and sent")
        }
    } catch (error) {
        logger.error(`Could not find all employees due to ${error}`)
        res.status(500).json({ message: "An error occured" })
    }
}


// get all employees
const getOne = async (req, res) => {
    try {
        // fetc all emplyees base on id parameter passed in path
        const employee = await Employee.findById(req.params.id)
        // if employee does not exist return not found error
        if (!employee) {
            res.status(404).json({ message: "Employee does not exist" })
            logger.info(`Employee ${req.params.id} requested not found`)
        } else {
            // else send the found employee
            res.status(200).send(employee)
            logger.info(`Employee ${employee.id}-${employee.firstname} requested and sent`)
        }
    } catch (error) {
        logger.error(`Could not find employee ${req.params.id} due to ${error}`)
        res.status(500).json({ message: "An error occured" })
    }
}


// delete employee record with Id
const delOne = async (req, res) => {
    try {
        // fetc all emplyees base on id parameter passed in path
        const employee = await Employee.findById(req.params.id)
        // if employee does not exist return not found error
        if (!employee) {
            res.status(404).json({ message: "Employee does not exist" })
            logger.info(`Employee ${req.params.id} not found in attempted delete`)
        } else {
            // if the employee exists delete and return success message
            await Employee.findByIdAndDelete(employee.id)
            res.status(200).json({ message: "Employee deleted" })
            logger.info(`Employee ${employee.id}-${employee.firstname} deleted`)
        }
    } catch (error) {
        logger.error(`Could not delete employee ${req.params.id} due to ${error}`)
        res.status(500).json({ message: "An error occured" })
    }
}

const editOne = async (req, res) => {
    try {
        // fetc all emplyees base on id parameter passed in path
        const employee = await Employee.findById(req.params.id)
        // if employee does not exist return not found error
        if (!employee) {
            res.status(404).json({ message: "Employee does not exist" })
            logger.info(`Employee ${req.params.id} not found in attempted delete`)
        } else {
            // if employee exists update the fields in request body
            await Employee.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({ message: "Employee information updated" })
            logger.info(`Employee ${employee.id}-${employee.firstname} updated`)
        }
    } catch (error) {
        logger.error(`Could not update employee ${req.params.id} due to ${error}`)
        res.status(500).json({ message: "An error occured" })
    }
}


module.exports = { addNew, getAll, getOne, editOne, delOne }