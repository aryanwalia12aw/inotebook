const jwt = require('jsonwebtoken');

const fetchuser = (req , res , next)=> {
    //  getting user data by auth-token
    const token = req.header("auth-token")
    
    if(!token){
        res.status(401).send({error : " please validate yourself by providing an authenticate token"})
    }
    let JWT_SECRET_KEY =  "arynnaisagoodb$oy"
    const data = jwt.verify(token , JWT_SECRET_KEY)
    req.user = data.user ;
    next ();
}

module.exports = fetchuser;




// var jwt = require('jsonwebtoken');
// const JWT_SECRET = 'Harryisagoodb$oy';

// const fetchuser = (req, res, next) => {
//     // Get the user from the jwt token and add id to req object
//     const token = req.header('auth-token');
//     if (!token) {
//         res.status(401).send({ error: "Please authenticate using a valid token" })
//     }
//     try {
//         const data = jwt.verify(token, JWT_SECRET);
//         req.user = data.user;
//         next();
//     } catch (error) {
//         res.status(401).send({ error: "Please authenticate using a valid token" })
//     }

// }



// module.exports = fetchuser;