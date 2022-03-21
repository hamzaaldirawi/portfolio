const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authAdminMiddleware = require('../../middleware/admin/authAdminMiddleware');
const adminAuth = require('../../middleware/admin/adminAuth');
const me = require('../../middleware/admin/me');
const { multerMid } = require('../../middleware/upload');

const { 
    addCode,
    updateCode,
    uploadCodeBImg,
    updateCodeBImg,
    uploadCodeGifImg,
    updateCodeGifImg,
    showCodes,
    showCodeById,
    deleteCodes,
    deleteCode,
    deleteCodeBImg,
    deleteCodeGifImg
} = require('../../controllers/codes.js');

// Add Code
router.post('/api/codes', [
    adminAuth,
    authAdminMiddleware,
    [
        check('codeName', 'Code Name is required').not().isEmpty(),
        check('codeUrl', 'Url is required').not().isEmpty(),
        check('codeUrl', 'Valid Url is Required').isURL()
    ]], addCode);

// Update Codes
router.put('/api/codes/:code_id', [
    adminAuth, 
    authAdminMiddleware,
    [
        check('codeUrl', 'Insert Valid URL').optional().isURL()
    ]], updateCode); 

// Upload BImg
router.post('/api/codes/upload/bimg/:code_id', [adminAuth, authAdminMiddleware, multerMid.single('file')], uploadCodeBImg);

// Update BImg
router.put('/api/codes/upload/bimg/:code_id', [adminAuth, authAdminMiddleware, multerMid.single('file')], updateCodeBImg);

// Upload Gif
router.post('/api/codes/upload/gifimg/:code_id', [adminAuth, authAdminMiddleware, multerMid.single('file')], uploadCodeGifImg)

// Update Gif
router.put('/api/codes/upload/gifimg/:code_id', [adminAuth, authAdminMiddleware, multerMid.single('file')], updateCodeGifImg);

// Show Codes
router.get('/api/codes', showCodes)

// Show specific Code
router.get('/api/codes/:code_id', showCodeById)

// Delete All Codes
router.delete('/api/codes', [adminAuth, authAdminMiddleware, me], deleteCodes);

// Delete Code
router.delete('/api/codes/:code_id', [adminAuth, authAdminMiddleware, me], deleteCode)

// Delete Img
router.delete('/api/delete/codes/bimg/:code_id/:filename', [adminAuth, authAdminMiddleware, me], deleteCodeBImg);

router.delete('/api/delete/codes/gifimg/:code_id/:filename', [adminAuth, authAdminMiddleware, me], deleteCodeGifImg);

module.exports = router;