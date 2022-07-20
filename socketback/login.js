const mongoose = require("mongoose")
const express = require ('express')
const bcrypt = require("bcrypt")
const Chats = require("./model/User")
const cors = require("cors")
// const { findOne } = require("./model/user")

const app = express()
const URI ='mongodb+srv://brightstar:tiplingold@cluster0.jls0e.mongodb.net/brightstardatabase?retryWrites=true&w=majority'

mongoose 
 .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
         })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));   

app.use(express.json())
app.use(cors())

app.post('/login',async (req,res) => {
    console.log("successful");
    const number = req.body.number
    const password = req.body.password
    // const hashpassword = await bcrypt.hash(password,12)
    console.log(number,password)
    // res.status(201).json({message: "login successfull"})
    // const user = findOne.User(email,password)
    // const login = bcrypt.log(email,password)

    try {
    const user = await Chats.findOne({number: number})
    const login =  await bcrypt.compare(password.user,password)




    // const myPlaintextPassword = 's0/\/\P4$$w0rD';
    // const someOtherPlaintextPassword = 'not_bacon';
    
    // (async () => {
    //     // Load hash from your password DB.
    //     const result1 = await bcrypt.compare(myPlaintextPassword, hash);
    //     // result1 == true
    
    //     const result2 = await bcrypt.compare(someOtherPlaintextPassword, hash);
    //     // result2 == false
    // })();


        console.log(user);
        console.log(login);
        console.log("login successful");
        res.status(201).json({message: " User logged in"})
    }
  
    catch (error) {
        console.log(error.message)
        
    res.status(404).json({message: "error message"})
    }
    
})

app.listen(4100,()=>{
    console.log (`app is listen to  ${4100 }`)
 })