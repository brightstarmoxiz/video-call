const {Schema, model } = require("mongoose")

const UserSche= new Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname:{
            type: String,
            required:true
            
        },
        nickname:{
            type: String,
            required:true
            
        },
        bestname:{
            type: String,
            required:true
            
        },
       femalegender:{
            type: String,
            required:false
            
        },
        malegender:{
            type: String,
            required:false
            
        },
        othergender:{
            type: String,
            required:false
            
        },
        schoolname:{
            type: String,
            required:true
            
        },
        number:{
            type: Number,
            required:true,
            unique:true
            
        },
        password:{
            type: String,
            required:true,
            unique:true
        }
      
    },
    {
        timestamps: true
    }
)

module.exports = model("Chats",  UserSche)