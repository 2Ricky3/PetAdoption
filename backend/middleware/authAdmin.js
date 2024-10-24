const jwt = require('jsonwebtoken');

const authAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Assuming Bearer token format
    if (!token) {
      return res.status(401).json({ message: 'No token provided, access denied' });
    }
    
    const decodedToken = jwt.verify(token, 'your_jwt_secret_key'); // Replace with your secret key
    
    // Check if the user is an admin (you might need to customize this)
    if (!decodedToken.isAdmin) {
      return res.status(403).json({ message: 'Access forbidden: Admins only' });
    }
    
    req.user = decodedToken; // Attach decoded token to request object
    next(); // Proceed to next middleware/route handler
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = authAdmin;
