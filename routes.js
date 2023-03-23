const router = require("express").Router();
const cors = require("cors");

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
 *           description: The title of your book
 *         lastname:
 *           type: string
 *           description: The title of your book
 *         surname:
 *           type: string
 *           description: The title of your book
 *         email:
 *           type: string
 *           description: The title of your book
 *         contact:
 *           type: string
 *           description: The title of your book
 *         city:
 *           type: string
 *           description: The title of your book
 *         postal_address:
 *           type: string
 *           description: The title of your book
 *         nationality:
 *           type: string
 *           description: The title of your book
 *         gender:
 *           type: string
 *           description: The title of your book
 *         national_id:
 *           type: string
 *           description: The title of your book
 *         department:
 *           type: string
 *           description: The title of your book
 *         position:
 *           type: string
 *           description: The title of your book
 *         salary:
 *           type: integer
 *           description: The title of your book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the Employee was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the Employee was updated
 *       example:
 *          firstname: Mathew
 *          lastname: murimi
 *          surname: njue
 *          email: muriminjue.nm@gmail.com
 *          contact: "+254712345678"
 *          city: Nairobi
 *          postal_address: 123-01234 Chuka
 *          nationality: Kenyan
 *          gender: other
 *          national_id: "33617930"
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
   *          schema:
   *            type: string
   *          required: true
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
   *     description: Fetch one employee record base on Id
   *     parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *          required: true
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
   *     description: Fetch one employee record base on Id
   *     parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: string
   *          required: true
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
