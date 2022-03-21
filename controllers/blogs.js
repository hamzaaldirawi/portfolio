const { validationResult } = require('express-validator');
const Admin = require('../models/Admin');
const Blog = require('../models/Blogs');
const { uploadImage, deleteImage } = require('../middleware/upload');
 
// Add Blog
const addBlog = async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const {
        blogText,
        blogName,
        blogUrl
    } = req.body

    try {
        const admin = await Admin.findById(req.admin.id).select('-password')
        const newBlog = new Blog({
            name: admin.name,
            admin: req.admin.id,
            blogText,
            blogName,
            blogUrl
        });

        const blog = await newBlog.save();
        res.json(blog)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

// Update Blog
const updateBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.blog_id);
    const updates = Object.keys(req.body);
    const allowedUpdate = ['blogText', 'blogName', 'blogUrl'];
    const isValidOperation = updates.every(update =>  allowedUpdate.includes(update));
    const errors = validationResult(req);  

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    if(!blog) {
        return res.status(400).json({ message: 'No Blog Found' })
    }

    if(!isValidOperation) {
        return res.status(400).json({ message: 'No Blog Found' })
    }

    try {
        updates.forEach(update => {
            blog[update] = req.body[update];   
        })
        
        const newBlog = await blog.save();
        res.json(newBlog);
    } catch (err) {
        res.status(500).send(err.message)
    }
}

// Upload Img
const uploadBlogImg = async (req, res, next) => {
    const blog = await Blog.findById(req.params.blog_id);
    if(!blog) {
        return res.status(400).json({ message: 'No Blog Found' })
    }

    const myFile = req.file;
    if(myFile) {
        if(myFile.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image'})
        }
    }
    
    try {
        const img = await uploadImage(myFile)
        blog.blogImg = img;

        const newBlog = await blog.save();
        res.status(200).json(newBlog)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

// Update Img
const updateBlogImg = async (req, res, next) => {
    const blog = await Blog.findById(req.params.blog_id);
    if(!blog) {
        return res.status(400).json({ message: 'No Blog Found' })
    }

    const myFile = req.file;

    if(myFile) {
        if(myFile.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image'})
        }
    }

    try {
        const img = await uploadImage(myFile)
        blog.blogImg = img;

        const newBlog = await blog.save();
        res.status(200).json(newBlog)
    } catch(err) {
        res.status(400).send('Server Error')
    }
}

// Show Blogs
const showBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ date: -1})
        res.json(blogs)
    } catch (err) {
        res.status(500).send('Server Error')
    }
}

// Show specific Blog
const showBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.blog_id)
        
        if(!blog) {
            return res.status(404).json({ message: 'No Blog Found' })
        }

        res.json(blog)
    } catch (err) {
        console.error(err.message)
        if(err.Kind === 'ObjectId') {
            return res.status(404).json({ message: 'No Blog Found' })
        }
        res.status(500).send('Server Error')
    }
}

// Delete All Blogs
const deleteBlogs = async (req, res) => { 
    const blogs = await Blog.find().sort({date: -1});
    
    if(blogs.length === 0) {
        return res.status(400).json({ message: 'No Blogs Found' });
    }

    for (let i = 0; i < blogs.length; i++) {
        if(blogs[i].blogImg) {
            if(blogs[i].blogImg !== '') {
                filename = blogs[i].blogImg.split('-b/')[1];
                await deleteImage(filename) 
            }
        }
    }

    try {
        await Blog.deleteMany();
        res.json({ message: 'Blogs Removed' })
    } catch (err) {
        if(err.Kind === 'ObjectId') {
            return res.status(404).json({ message: 'No Blog Found' })
        }
        res.status(500).send('Server Error')
    }
}

// Delete Blog
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.blog_id)
        
        if(!blog) {
            return res.status(404).json({ message: 'No Blog Found' })
        }
        if(blog.blogImg) {
            if(blog.blogImg !== '') {
                let filename = blog.blogImg.split('-b/')[1];
                deleteImage(filename); 
            }   
        }
        
        await blog.remove()
        res.json({ message: 'Blog Removed' })
    } catch (err) {
        console.error(err.message)
        if(err.Kind === 'ObjectId') {
            res.status(404).json({ message: 'No Blog Found' })
        }
        res.status(500).send('Server Error')
    }
}

// Delete Img
const deleteBlogImg = async (req, res) => {
    const blog_id = req.params.blog_id;
    const filename = req.params.filename;

    const blog = await Blog.findById(blog_id)
        
    if(!blog) {
        return res.status(404).json({ message: 'No Experience Found' })
    }

    try {
        if(blog.blogImg.length > 0) {          
            let fullLink = blog.blogImg;
            await deleteImage(filename);
            blog.blogImg = ''    
        }
        const newBlog = await blog.save();  
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(500).send('Server Error')
    } 
}

module.exports = {
    addBlog,
    updateBlog,
    uploadBlogImg,
    updateBlogImg,
    showBlogs,
    showBlogById,
    deleteBlogs,
    deleteBlog,
    deleteBlogImg
};