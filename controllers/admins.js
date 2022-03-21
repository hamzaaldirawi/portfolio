const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const Experience = require('../models/Experiences');
const Blog = require('../models/Blogs');
const Code = require('../models/Blogs');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

// LoadAdmin 
const loadAdmin = async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id).select('-password');
        res.json(admin);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

// Sign In
const signInAdmin = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    try {

        if(!admin) {
            return res.status(400).json({ message : 'Invalid Credentials' })
        }

        const isMatched = await bcrypt.compare(password, admin.password); 
        if(!isMatched) {
            return res.status(400).json({ message :'Invalid Credentials' })
        }

        const payload = {
            admin: {
                id: admin.id
            }
        };
        
        const jwtSecret = process.env.JWT_SECRET;

        jwt.sign(
            payload,
            jwtSecret,
            { expiresIn: 360000 }, 
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Register Admin
const registerAdmin = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    const { name, email, password } = req.body;  
    
    try {
        let admin = await Admin.findOne({ email });
        if(admin) {
            return res.status(400).json({ error : [{ message: 'Admin Already Exist' }]})
        };

        admin = new Admin({
            name,
            email,
            password
        });
 
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(password, salt);

        await admin.save();
        const payload = {
            admin: {
                id: admin.id
            }
        };
        
        const jwtSecret = process.env.JWT_SECRET;

        jwt.sign(
            payload,
            jwtSecret,
            { expiresIn: 360000 }, 
            (err, token) => {
                if (err) throw err;
                res.json(token);
        });

    } catch (err) {
        if(err.keyValue.name) {
            return res.status(401).json({message: 'Name Exists'});
        }
        res.status(500).send('Server Error');
    }
}

// Show Admins
const showAdmins = async(req, res) => {
    try {
        const admins = await Admin.find().sort({ date: -1}).select('-password');
        res.json(admins)
    } catch (err) {
        res.status(500).send('Server Error')
    }
}

// Show Admin
const showAdminById = async(req, res) => {
    try {
        const admins = await Admin.findById(req.params.admin_id).select('-password');
        res.json(admins)
    } catch (err) {
        res.status(500).send('Server Error')
    }
}

// Update Admin 
const updateAdmin = async (req, res) => {
    const admin = await Admin.findById(req.params.admin_id);
    const errors = validationResult(req);
    const updates = Object.keys(req.body);
    const allowedUpdate = ['email', 'oldpassword', 'password'];
    const isValidOperation = updates.every(update =>  allowedUpdate.includes(update));

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    };

    if(!admin) {
        return res.status(400).json({ message: 'Invalid Auth' })
    }

    if(req.params.admin_id !== admin._id.toString()) {
        if(admin._id.toString() !== process.env.MY_ID) {
            return res.status(500).json({ message : "Invalid Auth"});
        }
    }

    if(!isValidOperation) {
        return res.status(400).json({ message: 'Can Not be Updated' })
    }
       
    const { oldpassword, password } = req.body;

    const isMatched = await bcrypt.compare(oldpassword, admin.password); 
    if(!isMatched) {
        return res.status(400).json({ message :'Invalid Credentials' })
    }

    try {
        updates.forEach(update => {
            admin[update] = req.body[update];
        })

        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(password, salt);
        
        const updatedAdmin = await admin.save();
        res.status(200).json(updatedAdmin)
    } catch (err) {
        res.status(500).send('Server Error');
    }
}

// Delete Admin
const deleteAdmin = async (req, res) => {
    const admin = await Admin.findById(req.params.admin_id).select('-password');

    if(!admin) {
        return res.status(400).json({ message: 'Invalid Auth' });
    } 

    if(admin._id.toString() !== process.env.MY_ID) {
        if(req.params.admin_id !== admin._id.toString()) {
            return res.status(500).json({ message : "Invalid Auth"});
        }    
    }

    if(admin._id.toString() === process.env.MY_ID) {
        return res.status(500).json({ message : "Dangerous Zone"});
    }

    const adminExps = await Experience.find({admin: admin._id}).sort({ date: -1 });
    for (let i = 0; i < adminExps.length; i++) {
        if(adminExps[i].expImgs.length > 0) {
            let filename = ''
            for(let j = 0; j < adminExps[i].expImgs.length; j++) {
                filename = adminExps[i].expImgs[j].split('-b/')[1];
                await deleteImage(filename)
            }
        } 
    }

    const adminCodes = await Code.find({admin: admin._id}).sort({ date: -1 });
    for (let i = 0; i < adminCodes.length; i++) {
        if(adminCodes[i].codeImgs.length > 0) {
            let filename = ''
            for(let j = 0; j < adminCodes[i].codeImgs.length; j++) {
                filename = adminCodes[i].codeImgs[j].split('-/b')[1];
                await deleteImage(filename)
            }
        }
    }

    const adminBlogs = await Blog.find({admin: admin._id}).sort({ date: -1 });
    for (let i = 0; i < adminBlogs.length; i++) {
        let filename = ''
        if(adminBlogs[i].blogImg !== '') {
            filename = adminBlogs[i].blogImg.split('-/b')[1];
            await deleteImage(filename)
        } 
    }

    try {
        await Experience.deleteMany({ admin: req.params.admin_id })

        await Code.deleteMany({ admin: req.params.admin_id })
        
        await Blog.deleteMany({ admin: req.params.admin_id })

        await Admin.findOneAndRemove({ _id: req.params.admin_id })
        
        res.json({ message: 'Admin Deleted'})
    } catch (err) {
        res.status(500).send('Server Error')
    }
}

module.exports = {
    loadAdmin,
    signInAdmin,
    registerAdmin,
    updateAdmin,
    showAdmins,
    showAdminById,
    deleteAdmin
};