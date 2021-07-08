const mongoose=require('mongoose')
const schema =mongoose.Schema

const SchemaPerson = new schema (

        {
            name : {
                type:String,
                required:true
            },

            email :{
                type: String,
                required:true 
            },
            phone :{
                type : Number
            }
            
        }


)
const Person = mongoose.model('person',SchemaPerson)
module.exports=Person

