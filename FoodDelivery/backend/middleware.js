
const authUser = ( permissions) =>{
  return(req, res, next) =>{
    const userRole = req.body.role
    if(permissions.includes(userRole)){
      next()
    } else {
      return res.status(401).json('You must log in!')
    }
  }
} 

const authAdmin = (req, res, next) =>{
  res.json
  next()
}

module.exports = {authUser, authAdmin}




