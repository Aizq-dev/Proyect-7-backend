const jwt = require("jsonwebtoken");
const TOKEN_SECRET = process.env.JWT_TOKEN_SECRET

const signToken = (payload) => {
  const token = jwt.sign(payload, TOKEN_SECRET,{expiresIn: 24 *60 *60});
  return token;
};

const verifyToken = (token) =>{
 const payload = jwt.verify(token, TOKEN_SECRET)
    return payload
}  

module.exports={ signToken, verifyToken}