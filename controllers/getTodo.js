// import the model
const Todo = require("../models/todo");

// define route handler
exports.getTodo = async(req,res)=>{
    // making it async as i dont want to interrupt with main thread
    try{
        // fetch all todo items from db
        const todos = await Todo.find({});
        // response 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:"Internal server error",
            message:err.message
        })
    }
}
exports.getTodoById = async(req,res)=>{
    try{
        // extracting on basis of id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        // data for given id not found

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found",
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:"Data successfully fetched"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })

    }
}
