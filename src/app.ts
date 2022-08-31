import express from 'express'
import fs from 'fs'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import helmet from "helmet"
import swaggerDocs from "./utils/Swagger"

dotenv.config()
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

const app = express()
const dirPath = path.resolve(__dirname, './routes')
const port = <string>process.env?.['PORT'] || 5000

//middlewares
app.use(cors({ origin: '*'}))
app.use(morgan('dev'))
app.use(express.json())
app.use(helmet({
    crossOriginResourcePolicy: false,
}));

app.use(expressCspHeader({ 
    policies: { 
        'default-src': [expressCspHeader.NONE], 
        'img-src': [expressCspHeader.SELF], 
    } 
}));  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//route middleware
fs.readdirSync(dirPath).map((r) =>
    app.use('/api', require(`${dirPath}/${r}`))
)


//Database Connection
const mongoUrl = <string>process.env['MONGO_URI']
mongoose.connect(<string>mongoUrl)
    .then(() => console.log('connected to database'))
    .catch((error) => console.log('database connection failed', error))

//server connection

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
    swaggerDocs(app, port)
})
process.on("unhandledRejection", (err) => {
    console.log(`Logged Error: ${err}`,)
    server.close(() => process.exit(1))
})