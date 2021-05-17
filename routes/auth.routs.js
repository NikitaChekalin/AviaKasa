const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const router   = new Router() 
const User = require('../models/User')



//   /api/auth/register
router.post(
    '/register', 
    [
        check('email', 'Некоректний емейл').isEmail(),
        check('password', 'Мінімальна довжина пароля 6 символов').isLength({min: 4})
    ],

    async (req, res)=> {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array, message: "Некоректні дані при регістрації"
            })
        }
        const {email, password}  =  req.body
        
        const candidate = await User.findOne({ email })
        
        if (candidate){
           return res.status(400).json({ message: 'Такий користувач вже існує' })
        }

        const hashedPaswword =  await bcrypt.hash(password, 12)
        const user = new User({email , password: hashedPaswword})

        await user.save()
        res.status(201).json({message: 'Користувач створений!!!'})


    } catch (e) {
        res.status(500).json({message: 'Что пошло не так'})
    }
})

//   /api/auth/login
router.post('/login',
    [
        check('email','Введите коректный емейл').normalizeEmail().isEmail(),
        check('password','Введите коректный пароль').exists()

    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array, 
                    message: "Некоректні дані при вході у систему "
                })
            }
        const  {email , password} = req.body    
        const user = await User.findOne({ email  })   

        if (!user) {
            return res.status(400).json({ message: 'Пользователь не найден' })
        }

        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch ) {
            return res.status(400).json({message: 'invalid password, try again '})
        }
        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            {expiresIn: '6h'} //сколько часов будет жить токен

        )
        
        res.json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: 'Что пошло не так'})
        }
})

module.exports = router