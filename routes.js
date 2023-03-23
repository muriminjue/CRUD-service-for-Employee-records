const router = require("express").Router(); // import express router
const cors = require("cors");// import cors

// import app controlers
const { addNew, getAll, getOne, editOne, delOne } = require("./controllers");

// allow cross origin requests
router.use(cors());

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *          - firstname
 *          - lastname
 *          - surname
 *          - email
 *          - contact
 *          - city
 *          - postal_address
 *          - nationality
 *          - gender
 *          - national_id
 *          - department
 *          - position
 *          - salary
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Employee
 *         firstname:
 *           type: string
 *           description: The employee's firstname
 *         lastname:
 *           type: string
 *           description: The employee's lastname
 *         surname:
 *           type: string
 *           description: The employee's surname
 *         email:
 *           type: string
 *           description: The employee's email
 *         contact:
 *           type: string
 *           description: The employee's contact
 *         city:
 *           type: string
 *           description: The employee's city of residence
 *         postal_address:
 *           type: string
 *           description: The employee's postal address
 *         nationality:
 *           type: string
 *           description: The employee's nationality
 *         gender:
 *           type: string
 *           description: The employee's gender
 *         national_id:
 *           type: string
 *           description: The employee's natiional identification or passport number
 *         department:
 *           type: string
 *           description: The employee's work department
 *         position:
 *           type: string
 *           description: The employee's of position in the department
 *         salary:
 *           type: integer
 *           description: The employee's salary
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date and time the Employee was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date and time the Employee was updated
 *       example:
 *          firstname: Tom
 *          lastname: Dick
 *          surname: Harry
 *          email: xyz@abc.com
 *          contact: "+254712345678"
 *          city: Nairobi
 *          postal_address: 123-01234 Chuka
 *          nationality: Kenyan
 *          gender: other
 *          national_id: "987654321"
 *          department: PDDR
 *          position: Developer
 *          salary: 100000
 */

// add employee record
router.post(
    "/",

    /**
     * @swagger
     * /:
     *   post:
     *      summarry: create a new employee
     *      descriptions: Add a new employee
     *      requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Employee'
     *      responses:
     *          200:
     *              description: Returns succes message.
     *          400:
     *              description: A field is missing, or employee with same email, contact or national ID exists
     */
    addNew
);

// getall  employee record
router.get(
    "/",
    /**
     * @swagger
     * /:
     *  get:
     *     description: Fetch all employee records
     *     responses:
     *       200:
     *         description: Returns employees data array of objecta
     *       404:
     *         description: No Employee was not found
     *       500:
     *         description: Internal server error
     */
    getAll
);

// getone  employee record from id
router.get(
    "/:id",
    /**
     * @swagger
     * /{id}:
     *  get:
     *     description: Fetch one employee record base on Id
     *     parameters:
     *        - in: path
     *          name: id
     *          description: Employee id string. (Get one from get request to test)
     *          schema:
     *            type: string
     *          required: true
     *          example: 641c55db6f7e6584e316379a
     *     responses:
     *       200:
     *         description: Returns employee data object
     *       404:
     *         description: Employee was not found
     *       500:
     *         description: Internal server error
     */
    getOne
);

// update employee record
router.put(
    "/:id",
    /**
     * @swagger
     * /{id}:
     *  put:
     *     description: Update one employee record base on Id
     *     parameters:
     *        - in: path
     *          name: id
     *          description: Employee id string. (Get one from get request to test)
     *          schema:
     *            type: string
     *          required: true
     *          example: 641c55db6f7e6584e316379a
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Employee'
     *     responses:
     *       200:
     *         description: Employee record deleted successfuly
     *       404:
     *         description: Employee was not found
     *       500:
     *         description: Internal server error
     */
    editOne
);

// Delete employee record
router.delete(
    "/:id",
    /**
     * @swagger
     * /{id}:
     *  delete:
     *     description: Delete one employee record base on Id
     *     parameters:
     *        - in: path
     *          name: id
     *          description: Employee id string. (Get one from get request to test)
     *          schema:
     *            type: string
     *          required: true
     *          example: 641c55db6f7e6584e316379a
     *     responses:
     *       200:
     *         description: Employee record deleted successfuly
     *       404:
     *         description: Employee was not found
     *       500:
     *         description: Internal server error
     */
    delOne
);

module.exports = router;
