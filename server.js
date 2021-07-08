const express =require ('express')
const app =express()
app.use(express.json())

require('dotenv').config()
app.listen(process.env.PORT,(err)=>err?console.log(err):console.log('server is running'))

const connectDb=require('./connectDb')
connectDb()

app.use ('/api/contact',require('./routes/contactList'))

