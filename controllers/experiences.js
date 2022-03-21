const { validationResult } = require('express-validator');
const Admin = require('../models/Admin');
const Exp = require('../models/Experiences');
const { uploadImage, deleteImage } = require('../middleware/upload');

// Add Exp
const addExperience = async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const exps = await Exp.find().sort({ date: -1});
    const inputSkills = req.body.expSkills;
    const arraySkills = inputSkills.split(','); 
    let Skills = [];
    for (let i = 0; i < arraySkills.length; i++) {
        let skill = arraySkills[i].trim();
        Skills.push(skill)
    }
    
    const {
        expHead,
        expDesc,
        expDetails,
        expRule,
        expUrl
    } = req.body

    try {
        const admin = await Admin.findById(req.admin.id).select('-password');
        const expHeadLink = expHead.toLowerCase().split(' ').join('-');
        const newExp = new Exp({
            name: admin.name,
            admin: req.admin.id,
            expSkills: Skills,
            expHeadLink,
            expHead,
            expDesc,
            expDetails,
            expRule,
            expUrl,
            number: 1 + exps.length
        });

        const exp = await newExp.save();
        res.json(exp)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

// Update Exp
const updateExperience = async (req, res) => {
    const exp = await Exp.findById(req.params.exp_id);
    const updates = Object.keys(req.body);
    const allowedUpdate = ['expHead', 'expHeadLink', 'expDesc', 'expRule', 'expDetails', 'expUrl', 'expSkills'];
    const isValidOperation = updates.every(update =>  allowedUpdate.includes(update));
    const errors = validationResult(req);  

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    if(!exp) {
        return res.status(400).json({ message: 'No Experience Found' })
    }

    if(!isValidOperation) {
        return res.status(400).json({ message: "Experience Can't Be Updated"})
    }

    try {
        const inputSkills = req.body.expSkills;
        const arraySkills = inputSkills.split(','); 
        let Skills = [];
        for (let i = 0; i < arraySkills.length; i++) {
            let skill = arraySkills[i].trim();
            Skills.push(skill)
        }

        exp.expSkills = Skills;
        updates.forEach(update => {
            if(update === 'expImgs' || update === 'expSkills' || update === 'expBImg' || update === 'expGif') {
                return;
            }
            exp[update] = req.body[update];   
        })
        
        const newExp = await exp.save();
        res.json(newExp);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

// Upload Gif Img
const uploadExperienceGifImg = async (req, res, next) => {
    const exp = await Exp.findById(req.params.exp_id);
    if(!exp) {
        return res.status(400).json({ message: 'No Experience Found' })
    }

    const myFile = req.file;
    if(myFile) {
        if(myFile.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image'})
        }   
    }

    try {
        const img = await uploadImage(myFile)
        exp.expGif = img;

        const newExp = await exp.save();
        res.status(200).json(newExp)
    } catch (err) {
        res.status(500).send(err.message)
    } 
}

// Update Gif Img
const updateExperienceGifImg = async (req, res, next) => {
    const exp = await Exp.findById(req.params.exp_id);
    if(!exp) {
        return res.status(400).json({ message: 'No Experience Found' })
    }

    const myFile = req.file;
    if(myFile) {
        if(myFile.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image'})
        }   
    }

    try {
        const img = await uploadImage(myFile)
        exp.expGif = img;

        const newExp = await exp.save();
        res.status(200).json(newExp)
    } catch(err) {
        res.status(400).send(err.message)
    }
}

// Upload BImg
const uploadExperienceBImg = async (req, res, next) => {
    const exp = await Exp.findById(req.params.exp_id);
    if(!exp) {
        return res.status(400).json({ message: 'No Experience Found' })
    }

    const myFile = req.file;
    if(myFile) {
        if(myFile.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image'})
        }   
    }

    try {
        const img = await uploadImage(myFile)
        exp.expBImg = img;

        const newExp = await exp.save();
        res.status(200).json(newExp)
    } catch (err) {
        res.status(500).send(err.message)
    } 
}

// Update BImgs
const updateExperienceBImg = async (req, res, next) => {
    const exp = await Exp.findById(req.params.exp_id);
    if(!exp) {
        return res.status(400).json({ message: 'No Experience Found' })
    }

    const myFile = req.file;
    if(myFile) {
        if(myFile.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image'})
        }   
    }

    try {
        const img = await uploadImage(myFile)
        exp.expBImg = img;

        const newExp = await exp.save();
        res.status(200).json(newExp)
    } catch(err) {
        res.status(400).send(err.message)
    }
}

// Upload Imgs
const uploadExperienceImgs = async (req, res, next) => {
    const exp = await Exp.findById(req.params.exp_id);
    if(!exp) {
        return res.status(400).json({ message: 'No Experience Found' })
    }
    const myFiles = req.files;
    if(myFiles) {
        if(myFiles.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image'})
        }
    }
    
    try {
        let imgs = [];
        let gif;
        for (let i = 0; i < myFiles.length; i++) {
            if(myFiles[i].mimetype === 'image/gif') {
                gif = await uploadImage(myFiles[i]);
            } else {
                let img = await uploadImage(myFiles[i]);
                imgs.push(img)
            }
        }
        
        exp.expGif = gif;
        exp.expImgs = imgs;  
        const newExp = await exp.save();
        res.status(200).json(newExp)
    } catch (err) {
        res.status(500).send(err.message)
    } 
}

// Update Imgs
const updateExperienceImgs =  async (req, res, next) => {
    const exp = await Exp.findById(req.params.exp_id);
    if(!exp) {
        return res.status(400).json({ message: 'No Experience Found' })
    }

    const myFiles = req.files;
    if(myFiles) {
        if(myFiles.length <= 0) {
            return res.status(400).json({ message: 'Please Select an Image'})
        }
    }

    try {
        let imgs = [];
        let gif;
        for (let i = 0; i < myFiles.length; i++) {
            if(myFiles[i].mimetype === 'image/gif') {
                gif = await uploadImage(myFiles[i]);
                exp.expGif = gif;
            } else {
                let img = await uploadImage(myFiles[i]);
                imgs.push(img)
            }
        }

        for (let i = 0; i < imgs.length; i++) {
            if(!exp.expImgs.includes(imgs[i])) {
                exp.expImgs.unshift(imgs[i])
            }   
        }

        const newExp = await exp.save();
        res.status(200).json(newExp)
    } catch(err) {
        res.status(400).send(err.message)
    }
}

// Show Exps
const showExperiences = async (req, res) => {
    try {
        const exps = await Exp.find().sort({ date: -1})
        res.json(exps)
    } catch (err) {
        res.status(500).send('Server Error')
    }
}

// Show specific Exp
const showExperienceById = async (req, res) => {
    try {
        const exp = await Exp.findById(req.params.exp_id)
        
        if(!exp) {
            return res.status(404).json({ message: 'No Experience Found' })
        }

        res.json(exp)
    } catch (err) {
        console.error(err.message)
        if(err.Kind === 'ObjectId') {
            return res.status(404).json({ message: 'No Experience Found' })
        }
        res.status(500).send('Server Error')
    }
} 
 
// Show specific Exp By expHeadLink
const showExperienceByLink = async (req, res) => {
    try {
        const exp = await Exp.findOne({ expHeadLink: req.params.exp_link })

        if(!exp) {
            return res.status(404).json({ message: 'No Experience Found' })
        }

        res.json(exp)
    } catch (err) {
        console.error(err.message)
        if(err.Kind === 'ObjectId') {
            return res.status(404).json({ message: 'No Experience Found' })
        }
        res.status(500).send(err.messsage)
    }
}

// Delete All exps
const deleteExperiences = async (req, res) => { 
    const exps = await Exp.find().sort({date: -1});
    
    if(exps.length === 0) {
        return res.status(400).json({ message: 'No Experience Found' });
    }

    for (let i = 0; i < exps.length; i++) {
        if(exps[i].expImgs.length > 0) {
            let filename = ''
            for(let j = 0; j < exps[i].expImgs.length; j++) {               
                filename = exps[i].expImgs[j].split('-b/')[1];
                await deleteImage(filename)
            }
        }
        if(exps[i].expBImg) {
            let bImgName = exps[i].expBImg.split('-b/')[1];
            await deleteImage(bImgName)
        }

        if(exps[i].expGif) {
            let gifName = exps[i].expGif.split('-b/')[1];
            await deleteImage(gifName);
        }
    }

    try {
        await Exp.deleteMany();
        res.json({ message: 'Experiences Removed' })
    } catch (err) {
        if(err.Kind === 'ObjectId') {
            return res.status(404).json({ message: 'No Experience Found' })
        }
        res.status(500).send('Server Error')
    }
}

// Delete Exp
const deleteExperience = async (req, res) => {
    try {
        const exp = await Exp.findById(req.params.exp_id)
        
        if(!exp) {
            return res.status(404).json({ message: 'No Experience Found' })
        }
        
        if(exp.expImgs.length > 0) {
            let filename = ''
            for (let i = 0; i < exp.expImgs.length; i++) {
                filename = exp.expImgs[i].split('-b/')[1];
                await deleteImage(filename)
            }
        }

        if(exp.expBImg) {
            let bImgName = exp.expBImg.split('-b/')[1];
            await deleteImage(bImgName);
            
        }

        if(exp.expGif) {
            let gifName = exp.expGif.split('-b/')[1];
            await deleteImage(gifName);
        }

        await exp.remove()
        res.json({ message: 'Experience Removed' })
    } catch (err) {
        console.error(err.message)
        if(err.Kind === 'ObjectId') {
            return res.status(404).json({ message: 'No Experience Found' })
        }
        res.status(500).send(err.message)
    }
}

// Delete Img
const deleteExperienceImg = async (req, res) => {
    const exp_id = req.params.exp_id;
    const filename = req.params.filename;

    const exp = await Exp.findById(exp_id)
        
    if(!exp) {
        return res.status(404).json({ message: 'No Experience Found' })
    }

    try {
        if(exp.expImgs.length > 0) {
            let fullLink = 'https://storage.googleapis.com/hamzaaldirawi-portfolio-b/' + filename;
            await deleteImage(filename);
            if(exp.expBImg === fullLink) {
                exp.expBImg = '';
            }
            if(exp.expGif === fullLink) {
                return exp.expGif = '';
            }
            exp.expImgs = await exp.expImgs.filter(expImg => expImg !== fullLink);     
        }
        const newExp = await exp.save();  
        res.status(200).json(newExp);
    } catch (err) {
        res.status(500).send('Server Error')
    } 
}

const deleteExperienceBImg = async (req, res) => {
    const exp_id = req.params.exp_id;
    const filename = req.params.filename;

    const exp = await Exp.findById(exp_id)
        
    if(!exp) {
        return res.status(404).json({ message: 'No Experience Found' })
    }

    try {
        if(exp.expBImg) {
            await deleteImage(filename);
            exp.expBImg = '';     
        }
        const newExp = await exp.save();  
        res.status(200).json(newExp);
    } catch (err) {
        res.status(500).send('Server Error')
    } 
}

const deleteExperienceGifImg = async (req, res) => {
    const exp_id = req.params.exp_id;
    const filename = req.params.filename;

    const exp = await Exp.findById(exp_id)
        
    if(!exp) {
        return res.status(404).json({ message: 'No Experience Found' })
    }

    try {
        if(exp.expGif) {
            await deleteImage(filename);
            exp.expGif = '';     
        }
        const newExp = await exp.save();  
        res.status(200).json(newExp);
    } catch (err) {
        res.status(500).send('Server Error')
    } 
}

module.exports = {
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
};