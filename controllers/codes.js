const { validationResult } = require('express-validator');
const Admin = require('../models/Admin');
const Code = require('../models/Codes');
const { uploadImage, deleteImage } = require('../middleware/upload');

// Add Code
const addCode = async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const codes = await Code.find().sort({ date: -1})

    const {
        codeName,
        codeUrl
    } = req.body

    try {
        const admin = await Admin.findById(req.admin.id).select('-password');
        const newCode = new Code({
            name: admin.name,
            admin: req.admin.id,
            codeName, 
            codeUrl,
            number: 1 + codes.length
        });

        const code = await newCode.save();
        res.json(code)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

// Update Codes
const updateCode = async (req, res) => {
    const code = await Code.findById(req.params.code_id);
    const updates = Object.keys(req.body);
    const allowedUpdate = ['codeName', 'codeUrl'];
    const isValidOperation = updates.every(update =>  allowedUpdate.includes(update));
    const errors = validationResult(req);  

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    if(!code) {
        return res.status(400).json({ message: 'No Code Found'})
    }

    if(!isValidOperation) {
        return res.status(400).json({ message: 'Code Can Not be Updated' })
    }

    try {             
        updates.forEach(update => {
            code[update] = req.body[update];   
        })
        
        const newCode = await code.save();
        res.json(newCode);
    } catch (err) {
        res.status(500).send(err.message)
    }
} 

// Upload BImg
const uploadCodeBImg = async (req, res, next) => {
    const code = await Code.findById(req.params.code_id);
    if(!code) {
        return res.status(400).json({ message: 'No Code Found' })
    }

    const myFile = req.file;
    if(myFile) {
        if(myFile.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image '})
        }
    }  

    try {
        const img = await uploadImage(myFile)
        code.codeBImg = img;

        const newCode = await code.save();
        res.status(200).json(newCode)
    } catch(err) {
        res.status(400).send('Server Error')
    }
}

// Update BImg
const updateCodeBImg = async (req, res, next) => {
    const code = await Code.findById(req.params.code_id);
    if(!code) {
        return res.status(400).json({ message: 'No Code Found' })
    }

    const myFile = req.file;
    if(myFile) {
        if(myFile.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image '})
        }
    }  

    try {
        const img = await uploadImage(myFile)
        code.codeBImg = img;

        const newCode = await code.save();
        res.status(200).json(newCode)
    } catch(err) {
        res.status(400).send('Server Error')
    }
}

// Upload Gif Img
const uploadCodeGifImg = async (req, res, next) => {
    const code = await Code.findById(req.params.code_id);
    if(!code) {
        return res.status(400).json({ message: 'No Code Found' })
    }

    const myFile = req.file;
    if(myFile) {
        if(myFile.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image '})
        }
    }  

    try {
        const img = await uploadImage(myFile)
        code.codeGif = img;

        const newCode = await code.save();
        res.status(200).json(newCode)
    } catch(err) {
        res.status(400).send('Server Error')
    }
}

// Update Gif Img
const updateCodeGifImg = async (req, res, next) => {
    const code = await Code.findById(req.params.code_id);
    if(!code) {
        return res.status(400).json({ message: 'No Code Found' })
    }

    const myFile = req.file;
    if(myFile) {
        if(myFile.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image '})
        }
    }  

    try {
        const img = await uploadImage(myFile)
        code.codeGif = img;

        const newCode = await code.save();
        res.status(200).json(newCode)
    } catch(err) {
        res.status(400).send('Server Error')
    }
}

// Show Codes
const showCodes = async (req, res) => {
    try {
        const codes = await Code.find().sort({ date: -1})
        res.json(codes)
    } catch (err) {
        res.status(500).send('Server Error')
    }
}

// Show specific Code
const showCodeById = async (req, res) => {
    try {
        const code = await Code.findById(req.params.code_id)
        
        if(!code) {
            return res.status(404).json({ message: 'No Code Found' })
        }

        res.json(code)
    } catch (err) {
        console.error(err.message)
        if(err.Kind === 'ObjectId') {
            return res.status(404).json({ message: 'No Code Found' })
        }
        res.status(500).send('Server Error')
    }
}


// Delete All Codes
const deleteCodes = async (req, res) => {
    const codes = await Code.find().sort({date: -1});

    if(codes.length === 0) {
        return res.status(400).json({ message: 'No Code Found'});
    }
    
    for (let i = 0; i < codes.length; i++) {
        if(codes[i].codeBImg) {
            let bImgName = codes[i].codeBImg.split('-b/')[1];
            await deleteImage(bImgName)
        }

        if(codes[i].codeGif) {
            let gifName = codes[i].codeGif.split('-b/')[1];
            await deleteImage(gifName)
        }
    }

    try {
        await Code.deleteMany({})
        res.json({ message: 'Codes Removed' })
    } catch (err) {
        if(err.Kind === 'ObjectId') {
            return res.status(404).json({ message: 'No Codes Found'})
        }
        res.status(500).send('Server Error')
    }
}

// Delete Code
const deleteCode = async (req, res) => {
    try {
        const code = await Code.findById(req.params.code_id)
        
        if(!code) {
            return res.status(404).json({ message: 'No Code Found' })
        }

        if(code.codeBImg) {
            let bImgName = code.codeBImg.split('-b/')[1];
            await deleteImage(bImgName)
        }

        if(code.codeGif) {
            let gifName = code.codeGif.split('-b/')[1];
            await deleteImage(gifName)
        }
        
        await code.remove()
        res.json({ message: 'Code Removed' })
    } catch (err) {
        if(err.Kind === 'ObjectId') {
            return res.status(404).json({ message: 'No Code Found' })
        }
        res.status(500).send(err.message)
    }
}

// Delete BImg
const deleteCodeBImg = async (req, res) => {
    const code_id = req.params.code_id;
    const filename = req.params.filename;

    const code = await Code.findById(code_id)
        
    if(!code) {
        return res.status(404).json({ message: 'No Code Found' })
    }

    try {
        if(code.codeBImg) {
            await deleteImage(filename);
            code.codeBImg = '';     
        }
        const newCode = await code.save();  
        res.status(200).json(newCode);
    } catch (err) {
        res.status(500).send('Server Error')
    } 
}

const deleteCodeGifImg = async (req, res) => {
    const code_id = req.params.code_id;
    const filename = req.params.filename;

    const code = await Code.findById(code_id)
        
    if(!code) {
        return res.status(404).json({ message: 'No Code Found' })
    }

    try {
        if(code.codeGif) {
            await deleteImage(filename);
            code.codeGif = '';     
        }
        const newCode = await code.save();  
        res.status(200).json(newCode);
    } catch (err) {
        res.status(500).send('Server Error')
    } 
}


module.exports = {
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
};