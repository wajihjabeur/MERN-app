const express =require ('express')
const person =require('../Models/contactList')
const router =express.Router()



// create new contact 
// methode post 
// http://localhost:5000/api/contact/create
// body

router.post('/create',async(req,res)=>{
    let newperson=new person ({...req.body})
    let result =await newperson.save()
    res.send({result:result , msg:'person added'})
})


// get all contact
// methode get 
// http://localhost:5000/api/contact/
// params

router.get('/',async(req,res)=>{
    let result=await person.find()
    res.send({result:result , msg:'this is all contact'})
})


// find one contact
// methode get 
// http://localhost:5000/api/contact/:id
// params


router.get('/:id',async(req,res)=>{
    let result=await person.findOne({_id:req.params.id})
    res.send({result:result , msg:'contact with id'})
})


// delete one contact
// methode delete
// http://localhost:5000/api/contact/delete/:id
// params

router.delete('/delete/:id',async(req,res)=>{
    let result=await person.deleteOne({_id:req.params.id})
    result.n?res.send({result:result , msg:'contact with this id deleted'}):res.send({msg:'contact already deleted'})
})

// update contact
// methode put
// http://localhost:5000/api/contact/update/:id
// params ,body

router.put('/update/:id',async(req,res)=>{
    let result=await person.updateOne({_id:req.params.id},{$set:req.body})
    result.nModified?res.send({result:result , msg:'contact updated'}):res.send({msg:'contact already updated'})
})









module.exports=router