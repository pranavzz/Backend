// import the model
const Todo = require("../models/todo");

exports.deleteTodo = async(req,res)=>{
    try{
        // extracting on basis of id
        const id = req.params.id;
        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"Data successfully deleted"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
