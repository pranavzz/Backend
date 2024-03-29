// import the model
const Todo = require("../models/todo");

// define route handler
exports.createTodo = async(req,res)=>{
    // making it async as i dont want to interrupt with main thread
    try{
        // extract title and description from request body
        const {title,description} = req.body;
        // create a new todo object and insert into db
        const response = await Todo.create({title,description});
        // response is Todo class ka object
        // send a json respsonse with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:err.message,
        })
    }
}
