const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const adminAuth = async (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token) {
        return res.status(401).json({message: 'Invalid Auth'})
    };

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.admin = decoded.admin;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid Auth'});
    }
}

module.exports = adminAuth;