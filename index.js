require('dotenv').config() // access enviroment variables
const express = require("express") // nodejs framework
const mongoose = require('mongoose'); // mongoDB orm
const swaggerUi = require('swagger-ui-express'); // swagger fo socumentation
const swaggerJsdoc = require('swagger-jsdoc'); // allow comments documentation

const logger = require("./logger") // import app logger
const router = require("./routes") // import api routes

// iniyialise app
const app = express()

//create swagger documentation options
const swagger_options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Employee CRUD App',
            description: 'Api that accepts create, read, update and delete operations for employee records',
            version: '1.0.0',
            contact: {
                name: "Mathew murimi",
                email: "muriminjue.nm@gmail.com"
            }
        },
        servers: [{ url: '/api' }]
    },
    apis: ['./routes.js'], // files containing annotations as above

}


//enable passing json
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// MongoDB connection
mongoose.connect(process.env.DBURL).then((db) => {
    logger.info(`DB Connected to ${db.connection.host}`);
}
).catch((error) => {
    logger.error(`DB Connection failed due to ${error}`);
    process.exit(1);
})



// set api access route
app.use("/api", router) // api request routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swagger_options))); //Api dcoumentation routes

// start server
app.listen(process.env.PORT, async () => {
    logger.info("server started on port " + process.env.PORT);
})