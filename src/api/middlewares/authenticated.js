const AUTH_TOKEN = 'MY_SECRET_TOKEN'
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../../config/jwt')



const hasValidAuthJwt = (req,res,next)=>{
    try{
        const { authorization } = req.headers
        const [, token]=  authorization.split(' ')
    

      
        
        const payload =  verifyToken(token)
        console.log('token verificado = ', payload)

        req.user = payload

        next()
    }catch(err){
       
        res.status(401).json({data: 'No authenticated'})
    }
}

module.exports={
  hasValidAuthJwt
}