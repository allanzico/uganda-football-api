import { Express, Request, Response } from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import log from "./logger";

const port = <string>process.env?.['PORT'] || 5000
const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Uganda Football API",
            version: "1.0.0",
            description: "Uganda Football API documentation",
        },
        // components: {
        //     securitySchemes: {
        //         bearerAuth: {
        //             type: "http",
        //             scheme: "bearer",
        //             bearerFormat: "JWT",
        //         }
        //     },
        // },
        // security: [
        //     {
        //         bearerAuth: []
        //     }
        // ],
        servers: [
            { url: `http://localhost:${port}` }
        ],

    },
    apis: ["./src/routes/*.ts", "./src/models/*.ts"],
}

const swaggerSpec = swaggerJsdoc(options)

//server documentation
function swaggerDocs (app: Express, port: any) {

    //swagger Page
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    //docs in JSON format
    app.get('/api-docs.json', (_req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    }   )

    log.info(`Swagger documentation is available at http://localhost:${port}/api-docs `)
}

export default swaggerDocs;