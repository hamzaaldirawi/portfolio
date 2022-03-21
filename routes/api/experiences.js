const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const authAdminMiddleware = require('../../middleware/admin/authAdminMiddleware');
const adminAuth = require('../../middleware/admin/adminAuth');
const me = require('../../middleware/admin/me');

const { multerMid } = require('../../middleware/upload');

const { 
    addExperience,
    updateExperience,
    uploadExperienceGifImg,
    updateExperienceGifImg,
    uploadExperienceBImg,
    updateExperienceBImg,
    uploadExperienceImgs,
    updateExperienceImgs,
    showExperiences,
    showExperienceById,
    showExperienceByLink,
    deleteExperiences,
    deleteExperience,
    deleteExperienceImg,
    deleteExperienceBImg,
    deleteExperienceGifImg
} = require('../../controllers/experiences.js');


// Add Exp
router.post('/api/exps', [
    adminAuth,
    authAdminMiddleware,
    [
        check('expHead', 'Experience Heading is required').not().isEmpty(),
        check('expDesc', 'Experience Description is required').not().isEmpty(),
        check('expDetails', 'Experience Details are required').not().isEmpty(),
        check('expRule', 'Experience Rule is required').not().isEmpty(),
        check('expSkills', 'Experience Skills are required').not().isEmpty(),
        check('expUrl', 'Url is required').not().isEmpty(),
        check('expUrl', 'Valid Url is Required').isURL()
    ]], addExperience);

// Update Exp
router.put('/api/exps/:exp_id', [
    adminAuth, 
    authAdminMiddleware, 
    [
        check('expUrl', 'Insert Valid URL').optional().isURL()
    ]], updateExperience);

// Upload GifImg
router.post('/api/exps/upload/gifimg/:exp_id', [
    adminAuth, 
    authAdminMiddleware,
    multerMid.single('file')
], uploadExperienceGifImg);

// Update GifImgs
router.put('/api/exps/upload/gifimg/:exp_id', [
    adminAuth, 
    authAdminMiddleware, 
    multerMid.single('file')
], updateExperienceGifImg);

// Upload BImg
router.post('/api/exps/upload/bimg/:exp_id', [
    adminAuth, 
    authAdminMiddleware,
    multerMid.single('file')
], uploadExperienceBImg);

// Update BImgs
router.put('/api/exps/upload/bimg/:exp_id', [
    adminAuth, 
    authAdminMiddleware, 
    multerMid.single('file')
], updateExperienceBImg);

// Upload Imgs
router.post('/api/exps/upload/:exp_id', [
    adminAuth, 
    authAdminMiddleware, 
    multerMid.array('files')
], uploadExperienceImgs);

// Update Imgs
router.put('/api/exps/upload/:exp_id', [
    adminAuth, 
    authAdminMiddleware, 
    multerMid.array('files')
], updateExperienceImgs);

// Show Exp
router.get('/api/exps', showExperiences); 

// Show specific Exp
router.get('/api/exps/:exp_id', showExperienceById);

// Show specific Exp By expHeadLink
router.get('/api/exps/link/:exp_link', showExperienceByLink);

// Delete All exps
router.delete('/api/exps', [adminAuth, authAdminMiddleware, me], deleteExperiences)

// Delete Exp
router.delete('/api/exps/:exp_id', [adminAuth, authAdminMiddleware, me], deleteExperience)

// Delete Img
router.delete('/api/delete/exps/img/:exp_id/:filename', [adminAuth, authAdminMiddleware, me], deleteExperienceImg)

router.delete('/api/delete/exps/bimg/:exp_id/:filename', [adminAuth, authAdminMiddleware, me], deleteExperienceBImg)

router.delete('/api/delete/exps/gifimg/:exp_id/:filename', [adminAuth, authAdminMiddleware, me], deleteExperienceGifImg)

module.exports = router;