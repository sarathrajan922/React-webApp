const jwt = require('jsonwebtoken')
const secretKey = 'secert-key'
 module.exports = {

  verifyJwt: (req, res, next) => {
    const token = req.headers["authorization"];
    console.log(token);
    // const token = authHeader && authHeader.split(" ")[1];

    if (token == "null") {
      return res
        .status(401)
        .json({ invalidToken: true, message: "Unauthorized" });
    }

    jwt.verify(token, "access_secret_key", (err, decoded) => {
      if (err) {
        console.log(err);
        return res
          .status(403)
          .json({ invalidToken: true, message: '"Forbidden', err });
      }
     
      req.user = decoded;
      next();
    });
  },
    
    generateAccessToken: (email) => {
        try {
          const accessToken = jwt.sign(
           email,
            "access_secret_key",
            // { expiresIn: "20s" }
          )
          return accessToken
        } catch (error) {
          throw new Error(error);
        }
      },

    
 }