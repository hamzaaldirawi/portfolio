const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authAdminMiddleware = require('../../middleware/admin/authAdminMiddleware');
const adminAuth = require('../../middleware/admin/adminAuth');
const { multerMid } = require('../../middleware/upload');

const {
    addBlog,
    updateBlog,
    uploadBlogImg,
    updateBlogImg, 
    showBlogs,
    showBlogById,
    deleteBlogs,
    deleteBlog,
    deleteBlogImg
} = require('../../controllers/blogs');

// Add Blog
router.post('/api/blogs', [
    adminAuth, 
    authAdminMiddleware,
    [
        check('blogText', 'Text is required').not().isEmpty(),
        check('blogName', 'Name is required').not().isEmpty(),
        check('blogUrl', 'blogUrl is required').not().isEmpty().isURL(),
        check('blogUrl', 'Valid Url is Required').isURL()
    ]], addBlog);

// Update Blog
router.put('/api/blogs/:blog_id', [
    adminAuth, 
    authAdminMiddleware,
    [
        check('blogUrl', 'Insert Valid URL').optional().isURL()
    ]], updateBlog);

// Upload Img
router.post('/api/blogs/upload/:blog_id', [adminAuth, authAdminMiddleware, multerMid.single('file')], uploadBlogImg)

// Update Img
router.put('/api/blogs/upload/:blog_id', [adminAuth, authAdminMiddleware, multerMid.single('file')], updateBlogImg);

// Show Blogs
router.get('/api/blogs', showBlogs);

// Show specific Blog
router.get('/api/blogs/:blog_id', showBlogById);

// Delete All Blogs
router.delete('/api/blogs', [adminAuth, authAdminMiddleware], deleteBlogs)

// Delete Blog
router.delete('/api/blogs/:blog_id', [adminAuth, authAdminMiddleware], deleteBlog)

// Delete Img
router.delete('/api/delete/blogs/img/:blog_id/:filename', [adminAuth, authAdminMiddleware], deleteBlogImg);

module.exports = router;