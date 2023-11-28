const jwt = require('jsonwebtoken');
const secretKey = 'mysecretkey';


function authentificateJWT (req, res, next){
  const token = req.headers['authorization'];
  console.log('token',token)
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
// const authUser = ( permissions) =>{
//   return(req, res, next) =>{
//     const userRole = req.body.role
//     if(permissions.includes(userRole)){
//       next()
//     } else {
//       return res.status(401).json('You must log in!')
//     }
//   }
// } 

// const authAdmin = (req, res, next) =>{
//   res.json
//   next()
// }

module.exports = authentificateJWT;




