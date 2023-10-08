//IMPORT FROM PACKAGES
const express=require('express');
const mongoose=require('mongoose');

//IMPORT FROM OTHER FILES
const authRouter=require('./routes/auth');
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');


//Init
const PORT=process.env.PORT || 3000;
const app=express(); 
const DB="mongodb+srv://Sandeep:iamsandy@cluster0.ev4yejc.mongodb.net/?retryWrites=true&w=majority";

//middleware
//CLient ->middleware -> Server -> Client
app.use(express.json())
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//Connections
mongoose.connect(DB)
.then(()=>{
    console.log("Connection Scuccessful");
})
.catch((e)=>{
    console.log(e);
});

//creating an api
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`connected at port ${PORT}`);
});


//localhost
