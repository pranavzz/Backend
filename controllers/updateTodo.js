// import the model
const Todo = require("../models/todo");

// define route handler
exports.updateTodo = async(req,res)=>{
    // making it async as i dont want to interrupt with main thread
    try{
        const {id} = req.params;
        const {title,description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        )

        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Data updated successfully"
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
