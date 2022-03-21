const Admin = require('../../models/Admin');

const authAdminMiddleware = async (req, res, next) => {
    const admin = await Admin.findById(req.admin.id).select('-password');
    
    if(!admin) {
        return res.status(500).json({ message: "Invalid Request" })
    }

    try {
        next()
    } catch (err) {
        res.status(401).json({ message: "Invalid Request" });
    }
}

module.exports = authAdminMiddleware;