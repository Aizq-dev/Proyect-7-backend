const cloudinary = require('cloudinary').v2
const { CloudinaryStorage} = require('multer-storage-cloudinary')
const multer = require('multer')

const AvatarImg = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder:'avatars',
        allowed_formats: ['jpg','png','jpeg','gif','webp']
    }

})
const LogoImg = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder:'logos',
        allowed_formats: ['jpg','png','jpeg','gif','webp']
    }

})


const uploadAvatar = multer({storage:AvatarImg})
const uploadLogo = multer({storage: LogoImg})

module.exports= {uploadAvatar,uploadLogo}
