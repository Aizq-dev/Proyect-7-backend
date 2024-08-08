require('dotenv').config()
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const express =require('express')
const { connectDB } = require('./src/config/db')
const mainRoutes =require('./src/api/routes/indexRouter')
const { setError } = require('./src/config/error')
const { initialData } = require('./src/api/controllers/initialData')


connectDB
initialData()
  const app = express()
app.use(cors({
  origin: (origin, callback)=>{
    callback(null,true)
  }
}))
const limiter = rateLimit({
  windowsMs: 3*60*1000,
  max: 50,
  standarHeaders: false,
  legacyHeaders: false
}) 
app.use(limiter)
app.use(express.json())
app.use(express.urlencoded({ extended:true}))

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
 
  next()

})
app.disable('x-powered-by')



  const PORT = 4001
  app.use('/api',mainRoutes)
  app.use('*',(req,res,next)=>{
    return next(setError('404',"Ruta no encontrada"))})

app.use((error,req,res,next)=>{
 return res.status(error.status || '500').json(error.message || "Error Interno del Servidor")
})


app.listen(PORT,()=>{
    console.log(`La App corriento en puerto: http://localhost:${PORT}`)
})