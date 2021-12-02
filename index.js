//Create a post route where the incoming data includes fields name, email,
// password, and if all the fields are given then given a response as User 
//Registered else give an error with a suitable response code along with an 
//error message.

const express = require("express");
const app = express();
const port = 5050;
app.use(express.json());

app.post("/register",(req,res)=>{
    const {name,email_id,password} = req.body;
    if(!name || !email_id || !password){
        res.status(206).send("Require all Fields");
    }else{
        res.send("User Registered");
    }
})

app.listen(port, () => {
    console.log(`Server started running on port ${port}`);
})

//Q.Explain what is middleware?

//A middleware is basically a function that will the receive the Request and Response objects,
//just like your route Handlers do. As a third argument you have another function 
//which you should call once your middleware code completed.

//Q.Why do we use express.json()?

//express.json() is a method inbuilt in express to recognize the incoming Request
// Object as a JSON Object i.e It will parse the data and will also make the data accessible in req.body  