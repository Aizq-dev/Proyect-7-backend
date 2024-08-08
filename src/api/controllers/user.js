const {createUserInDB,getUserByEmailFromDB, getUserByIdFromDB, updateUserWithAvatarInDB} = require('../repositories/users')
const { signToken } = require('../../config/jwt')
const { hashPassword, verifyPassword } = require('../../config/password')


const registerUser =  async (req,res)=>{
    try{
    const {email, password} = req.body
    console.log('console.log' ,req.body)
    if (!password || password.length < 6) {
        return res.status(400).json({ data: 'La contraseña debe tener al menos 6 caracteres.' });
    }
    if (!/[a-z]/.test(password)) {
        return res.status(400).json({ data: 'La contraseña debe contener al menos una letra minúscula.' });
    }
    if (!/[A-Z]/.test(password)) {
        return res.status(400).json({ data: 'La contraseña debe contener al menos una letra mayúscula.' });
    }

    const hash = await hashPassword(password)


    const newUser = await createUserInDB({email, password: hash})
    res.status(200).json({data: newUser })}
    catch(err){
        console.log('>>> Error creating user', err)
        res.status(400).json({data : 'Error registering user'})
    }

}

const loginUser = async (req,res)=>{
    const {email, password} = req.body
    const user = await getUserByEmailFromDB(email)

    if (!user){
        res.status(401).json({data: 'User dont exist'})
    return
    }
    const isValidPassword = await verifyPassword(password, user.password)
    if(!isValidPassword){
        res.status(401).json({data: 'Incorrect email or password'})
    return
    }

    const token = signToken({id : user._id})
const {password: unusedPassword, ...restUser}= user
    res.status(200).json({data:{
         token,
         user: restUser}
        })
}

const getUser = async (req,res)=>{
    const {id} = req.user
    const user = await getUserByIdFromDB(id)
    res.status(200).json({data: user })
}

const updateUserAvatar = async ( req,res,next)=>{
    const {path}=req.file
    const {id} = req.user
   await updateUserWithAvatarInDB(id,path)
   res.status(201).json({data: path})
}

module.exports= {registerUser,loginUser,getUser,updateUserAvatar}