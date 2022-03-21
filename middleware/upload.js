const { format } = require('util');
const multer = require('multer');
const gc = require('../config');
const bucket = gc.bucket(process.env.BUCKET)

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/gif') {
      cb(null, true)
    } else {
      cb({msg: "Please upload an Image"}, false)
    }
}

const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024
    },
    fileFilter: fileFilter
})

const uploadImage = (files) => new Promise((resolve, reject) => {

  const { originalname, buffer } = files;
  const lowercase = originalname.toLowerCase();
  let finalName;
  if(lowercase.includes(' ')) {
    finalName = lowercase.replace(/\s/g, '');
  } else {
    finalName = lowercase;
  }

  const blob = bucket.file('hamzaaldirawi-' + finalName)
  const blobStream = blob.createWriteStream({
    resumable: false
  })
  blobStream.on('finish', () => {
    const publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    )
    resolve(publicUrl)
  })
  .on('error', () => {
    reject(`Unable to upload image, something went wrong`)
  })
  .end(buffer)
})

const deleteImage = (files) => {
  bucket.file(files).exists().then(res => {
    res = res[0];
    if(res === true) {
      bucket.file(files).delete();
    }
  });
}

module.exports = { multerMid, uploadImage, deleteImage };