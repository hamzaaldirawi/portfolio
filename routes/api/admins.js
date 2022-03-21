const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const me = require('../../middleware/admin/me');
const authAdminMiddleware = require('../../middleware/admin/authAdminMiddleware')
const adminAuth = require('../../middleware/admin/adminAuth');

const {
    loadAdmin,
    signInAdmin,
    registerAdmin,
    updateAdmin,
    showAdmins,
    showAdminById,
    deleteAdmin
} = require('../../controllers/admins');

// LoadAdmin
router.get('/api/dash/admin', [adminAuth, authAdminMiddleware], loadAdmin); 

// Sign In
router.post('/api/dash/admin/signin', [[
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').exists()
]], signInAdmin);

// Register Admin
router.post('/api/dash/admin/register', [
    adminAuth, 
    me,
    [
        check('name', `Name is required`).not().isEmpty(),
        check('email', 'Please include a vaild email').isEmail(),
        check('password', 'Please Enter a Password with 6 or more').isLength({min: 6})
    ]], registerAdmin);

// update Admin
router.put('/api/dash/admin/:admin_id', [
    adminAuth, 
    authAdminMiddleware,
    [
        check('password', 'Please Enter a Password with 6 or more').isLength({min: 6})
    ]], updateAdmin);

// showAdmins 
router.get('/api/dash/admins', [adminAuth, me], showAdmins);

// show Admin By Id 
router.get('/api/dash/admin/:admin_id', [adminAuth, authAdminMiddleware], showAdminById);

// Delete Admin
router.delete('/api/dash/admin/:admin_id', [adminAuth, authAdminMiddleware], deleteAdmin);

module.exports = router;