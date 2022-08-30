import express from 'express'
import fs from 'fs'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import helmet from "helmet"
import swaggerDocs from "./utils/Swagger"
// import { createProxyMiddleware } from 'http-proxy-middleware'

dotenv.config()


const app = express()
const dirPath = path.resolve(__dirname, './routes')
export const port = <string>process.env?.['PORT'] || 5000

//middlewares
app.use(cors({}))
app.use(morgan('dev'))
app.use(express.json())
app.use(helmet({
    crossOriginResourcePolicy: false,
}));

//route middleware
fs.readdirSync(dirPath).map((r) =>
    app.use('/api', require(`${dirPath}/${r}`))
)

// app.use('/api', createProxyMiddleware({
//   target: `http://localhost:${port}/`, //original url
//   changeOrigin: true,
//   //secure: false,
//   onProxyRes: function (proxyRes, req, res) {
//      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//   },
//   headers: {
//     "Connection": "keep-alive"
// },
// }));

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