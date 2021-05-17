const express = require('express')
const config = require('config')
const mongoose = require('mongoose')


const app = express()

app.use(express.json({ extented: true}))
app.use('/api/auth', require('./routes/auth.routs'))
app.use('/api/link', require('./routes/link.routes'))


const PORT  = config.get('port') || 5000


async function start() {
    try {
        await mongoose.connect( config.get('mongoUri'),{
            useNewUrlParser: true ,
            useUnifiedTopology: true,
            useCreateIndex:true  ,

        })
        app.listen(PORT, ()=> console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server erorr',e.message );
        process.exitCode(1)
    }
}


start()
