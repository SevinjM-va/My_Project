const jwt = require('jsonwebtoken');
const secretKey = 'mysecretkey';


function authentificateJWT (req, res, next){
  const token = req.headers['authorization'];
  if(!token){
    return res.status(401).json({message: "Sign up please"})
  }
  jwt.verify(token, secretKey,(err,user)=>{
    if(err){
      return res.status(403).json({message: 'Token verification failed'})
    }
    req.user = user;
    next()
  })
}


module.exports = authentificateJWT;




