const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

//  Check if token exists
if (!token){
    res.status(401).send({message:"Not authroized to access this route"})
}

try{
    //verify token
    const decoded = jwt.verify(token,'dasdfc');
    console.log(decoded)
    
    next()
}catch(err){
    return res.status(401).send({message:'Not authorized to access this route'})
}

});
